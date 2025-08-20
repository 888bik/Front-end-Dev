import "reflect-metadata";

import express, { Express, NextFunction, Request, Response } from "express";
import { Logger } from "./logger";
import path from "path";
import { DESIGN_PARAMTYPES, INJECTABLE, INJECTABLE_TOKENS } from "../common";

export class NestApplication {
  //在内部创建一个express应用
  private readonly app: Express = express();
  //用于保存所有的提供者
  private readonly providers = new Map();

  constructor(protected readonly module: any) {
    this.app.use(express.json()); //用来把JSON格式的请求体对象放在req.body上
    this.app.use(express.urlencoded({ extended: true })); //把form表单格式的请求体对象放在req.body
    this.app.use((req, res, next) => {
      (req as any).user = { name: "admin", role: "admin" };
      next();
    });
    this.initProviders();
  }
  private initProviders() {
    const providers = Reflect.getMetadata("providers", this.module) ?? [];
    for (const provider of providers) {
      //判断provider是以什么格式注册的
      if (provider.provide && provider.useValue) {
        this.providers.set(provider.provide, provider.useValue);
      } else if (provider.provide && provider.useClass) {
        //useClass是一个类，本身可能也依赖其他类
        const dependencies = this.resolveDependencies(provider.useClass);

        const instance = new provider.useClass(...dependencies);
        this.providers.set(provider.provide, instance);
      } else if (provider.provide && provider.useFactory) {
        const inject = provider.inject ?? [];

        //inject可能为普通的字符串或者其他provider
        const injectValues = inject.map((value) => {
          return this.getProvider(value);
        });

        const value = provider.useFactory(...injectValues);
        this.providers.set(provider.provide, value);
      } else {
        //直接写LoggerService的情况,同样判断是否依赖其类
        const dependencies = this.resolveDependencies(provider);
        this.providers.set(provider, new provider(...dependencies));
      }
    }
  }

  /**
   * 给app实例添加中间件
   * @param middleware 中间件
   */
  use(middleware) {
    this.app.use(middleware);
  }

  /**
   * 配置映射路由
   */
  async init() {
    //取出模块中所有的controller,将controller中的prefix数据与类中所有方法的路径拼接
    const controllers = Reflect.getMetadata("controllers", this.module);

    Logger.log(`AppModule dependencies initialized`, "InstanceLoader");

    //路由映射的核心是知道 什么样的请求方法什么样的路径对应的哪个处理函数
    for (const Controller of controllers) {
      //获取类需要哪些依赖
      const dependencies = this.resolveDependencies(Controller);
      //将实例注入类中
      const controller = new Controller(...dependencies);
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
        //获取实例对象上的方法
        const method = controllerPrototype[methodName];
        const pathMetadata = Reflect.getMetadata("path", method); //../getAllUser
        const httpMethod: string = Reflect.getMetadata("method", method); //"GET" | "POST" | ....
        const statusCode = Reflect.getMetadata("statusCode", method);
        const headers = Reflect.getMetadata("headers", method) ?? [];
        const redirectUrl = Reflect.getMetadata("redirectUrl", method);
        const redirectStatusCode = Reflect.getMetadata(
          "redirectStatusCode",
          method
        );
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
            //显示调用controller的特定方法并传入参数
            const result = method.call(controller, ...args);

            //判断如果需要重定向，则直接重定向到指定的redirectUrl并指定重定向状态码
            if (redirectUrl) {
              return response.redirect(redirectStatusCode || 302, redirectUrl);
            }

            if (statusCode) {
              response.statusCode = statusCode;
            } else if (httpMethod === "POST") {
              response.statusCode = 201;
            }

            const responseMetadata = this.getResponseMetadata(
              controller,
              methodName
            );

            const isPassThrough = responseMetadata?.some((param) => {
              return param?.data?.passthrough === true;
            });

            if (!responseMetadata || !isPassThrough) {
              headers.forEach(({ key, value }) => {
                response.setHeader(key, value);
              });
              //将方法返回的结果传给express返回响应,比如 getUser(){return "allUsers"}
              response.send(result);
            }
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

  /**
   *
   * @param clazz 类
   * @returns
   */
  private resolveDependencies(Clazz) {
    //获取通过Inject注入的依赖的token，如果不存在则说明是通过构造器直接注入的
    const injectedTokens = Reflect.getMetadata(INJECTABLE_TOKENS, Clazz) ?? [];
    //属性注入

    //直接获取构造函数参数所需的依赖类
    const constructorParams =
      Reflect.getMetadata(DESIGN_PARAMTYPES, Clazz) ?? [];
    return constructorParams.map((param, index) => {
      return this.getProvider(injectedTokens[index] ?? param);
    });
  }

  private getProvider(injectedToken) {
    return this.providers.get(injectedToken) ?? injectedToken;
  }

  /**
   *
   * @param controller controller类
   * @param methodName 方法名
   * @returns
   */
  private getResponseMetadata(controller: any, methodName: string) {
    const paramsMetadata =
      Reflect.getMetadata("params", controller, methodName) ?? [];

    //判断参数装饰器数组中是否含有Res、Response、Next
    // return paramsMetadata.some(
    //   (param) => param && (param.key === "Res" || param.key === "Response")
    // );
    //将含有Res、Response、Next的数据返回
    return paramsMetadata.filter(
      (param) =>
        param &&
        (param.key === "Res" ||
          param.key === "Response" ||
          param.key === "Next")
    );
  }

  /**
   *
   * @param instance 控制器实例
   * @param methodName 控制器实例方法的名称
   * @param request express的request
   * @param response express的response
   * @param next express的next
   * @returns
   */
  private getMethodParams(
    instance: any,
    methodName: string,
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const paramsMetadata: any[] = Reflect.getMetadata(
      "params",
      instance,
      methodName
    );
    if (!paramsMetadata || paramsMetadata.length === 0) return [];
    // [ { paramIndex: 1, key: 'Request' }, { paramIndex: 0, key: 'Req' } ]
    //获取类似上面这种格式的参数元数据,对其排列,因为正常来说都是索引为0的排在第一
    return paramsMetadata
      .sort((a, b) => {
        return a.paramIndex - b.paramIndex;
      })
      .map((paramsMetadata) => {
        const { key, data, factory } = paramsMetadata;
        const ctx = {
          switchToHttp: () => {
            return {
              getRequest() {
                return request;
              },
              getResponse() {
                return response;
              },
              getNext() {
                return next;
              },
            };
          },
        };
        switch (key) {
          case "Request":
          case "Req":
            return request;
          case "Query":
            return data ? request.query[data] : request.query;
          case "Headers":
            return data ? request.headers[data] : request.headers;
          case "Session":
            return data ? request.session[data] : request.session;
          case "Ip":
            return request.ip;
          case "Param":
            return data ? request.params[data] : request.params;
          case "Body":
            return data ? request.body[data] : request.body;
          case "Response":
          case "Res":
            return response;
          case "Next":
            return next;
          case "DecoratorFactory":
            //执行函数得到结果并返回
            return factory(data, ctx);
          default:
            return null;
        }
      });
    //return [req,req]
  }

  /**
   * 用于初始化并启动一个express服务
   * @param port 端口号
   */
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
