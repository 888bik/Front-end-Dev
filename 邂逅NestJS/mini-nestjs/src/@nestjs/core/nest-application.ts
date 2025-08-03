import "reflect-metadata";

import express, { Express, NextFunction, Request, Response } from "express";
import { Logger } from "./logger";
import path from "path";

export class NestApplication {
  //在内部创建一个express应用
  private readonly app: Express = express();

  constructor(protected readonly module: any) {}

  //配置映射路由
  async init() {
    //取出模块中所有的controller,将controller中的prefix数据与类中所有方法的路径拼接
    const controllers = Reflect.getMetadata("controllers", this.module);
    Logger.log(`AppModule dependencies initialized`, "InstanceLoader");
    //路由映射的核心是知道 什么样的请求方法什么样的路径对应的哪个处理函数
    for (const Controller of controllers) {
      const controller = new Controller();
      //从每个controller类获取前缀prefix,如果没有前缀则默认"/"
      const prefix = Reflect.getMetadata("prefix", Controller) || "/";
      //开始解析路由
      Logger.log(`${Controller.name} {${prefix}}`, "RoutesResolver");
      // const controllerPrototype = Reflect.getPrototypeOf(controller);
      const controllerPrototype = Controller.prototype;
      //从每个实例对象上获取所有方法
      for (const methodName of Object.getOwnPropertyNames(
        controllerPrototype
      )) {
        //获取实例对象上的方法,比如index
        const method = controllerPrototype[methodName];
        const pathMetadata = Reflect.getMetadata("path", method); //../getAllUser
        const httpMethod: string = Reflect.getMetadata("method", method); //"GET" | "POST" | ....
        //如果方法不存在则跳过,这里不能判断path,因为路径可能为空,也就是可能以controller的prefix开头的方法
        if (!httpMethod) continue;
        //开始拼接完整路由
        const routePath = path.posix.join("/", prefix, pathMetadata); //类似 abc/getALlUser
        //app.get("/abc/getAllUser",()=>{})
        this.app[httpMethod.toLocaleLowerCase()](
          routePath,
          (request: Request, response: Response, next: NextFunction) => {
            //获取方法参数
            const args = this.getMethodParams(
              controller,
              methodName,
              request,
              response,
              next
            );
            //执行方法
            const result = method(controller, ...args);
            response.send(result);
          }
        );
        Logger.log(
          `Mapped {${routePath}, ${httpMethod}} route`,
          "RoutesResolver"
        );
      }
    }

    Logger.log(`Nest application successfully started`, "NestApplication");
  }
  private getMethodParams(
    instance: any,
    methodName: string,
    request?: Request,
    response?: Response,
    next?: NextFunction
  ) {
    const paramsMetadata: any[] = Reflect.getMetadata(
      "params",
      instance,
      methodName
    );
    // [ { paramIndex: 1, key: 'Request' }, { paramIndex: 0, key: 'Req' } ]
    //获取类似上面这种格式的参数元数据,对其排列,因为正常来说都是索引为0的排在第一
    return paramsMetadata
      .sort((a, b) => {
        return a.parameterIndex - b.parameterIndex;
      })
      .map((paramsMetadata) => {
        const { key } = paramsMetadata;
        switch (key) {
          case "Request":
          case "Req":
            return request;
          default:
            return null;
        }
      });
    //return [req,req]
  }

  async listen(port: number) {
    //调用init
    await this.init();
    //启动一个http服务器实例,并监听端口
    this.app.listen(port, () => {
      Logger.log(
        `Application is running on http://localhost:${port}`,
        "NestApplication"
      );
    });
  }
}
