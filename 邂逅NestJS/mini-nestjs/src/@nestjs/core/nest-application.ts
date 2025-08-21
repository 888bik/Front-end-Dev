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
    //获取当前模块import进来的模块的元数据
    const imports = Reflect.getMetadata("imports", this.module) ?? [];

    //遍历imports数组
    for (const importedModule of imports) {
      this.registerProviderFromModule(importedModule);
    }
    //获取当前模块提供者的元数据
    const providers = Reflect.getMetadata("providers", this.module) ?? [];
    //遍历注册个提供者
    for (const provider of providers) {
      this.addProvider(provider);
    }
  }

  private addProvider(provider) {
    //为了避免循环依赖，每次添加前可以做一个判断，如果Map中已经存在，则直接返回
    const injectedProviderToken = provider.provide ?? provider;
    if (this.providers.has(injectedProviderToken)) return;
    if (provider.provide) {
      if (provider.useValue) {
        this.providers.set(provider.provide, provider.useValue);
      } else if (provider.useClass) {
        const instance = this.resolveDependencies(provider.useClass);
        this.providers.set(provider.provide, instance);
      } else if (provider.useFactory) {
        const injectTokens = provider.inject || [];
        const injectDeps = injectTokens.map((token) => {
          return this.getProvider(token);
        });
        const instance = provider.useFactory(...injectDeps);
        this.providers.set(provider.provide, instance);
      }
    } else {
      const instance = this.resolveDependencies(provider);
      this.providers.set(provider, instance);
    }
  }

  private registerProviderFromModule(module) {
    //获取模块的所有providers
    const providers = Reflect.getMetadata("providers", module) || [];

    //获取模块的export的provider
    const exportsProviders = Reflect.getMetadata("exports", module);
    for (const exportTokens of exportsProviders) {
      //export有可能是其他模块,所以先判断这个导出的是否是模块(模块的重新导出)
      if (this.isModule(exportTokens)) {
        //递归调用
        this.registerProviderFromModule(exportTokens);
      } else {
        //判断导入的当前模块是否有exports对应的服务
        const provider = providers.find(
          (provider) =>
            provider.provide === exportTokens || provider === exportTokens
        );
        if (provider) this.addProvider(provider);
      }
    }
  }
  /**
   * 判断是否为模块
   * @param injectedToken token
   * @returns boolean
   */
  private isModule(injectedToken) {
    return (
      injectedToken &&
      injectedToken instanceof Function &&
      Reflect.getMetadata("isModule", injectedToken)
    );
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
    const controllers = Reflect.getMetadata("controllers", this.module);

    Logger.log(`AppModule dependencies initialized`, "InstanceLoader");

    //路由映射的核心是知道 什么样的请求方法什么样的路径对应的哪个处理函数
    for (const Controller of controllers) {
      const controller = this.resolveDependencies(Controller);

      //从每个controller类获取前缀prefix,如果没有前缀则默认"/"
      const prefixPath = Reflect.getMetadata("prefix", Controller) || "/";
      //开始解析路由
      Logger.log(`${Controller.name} {${prefixPath}}`, "RoutesResolver");
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
        const routePath = path.posix.join("/", prefixPath, pathMetadata); //类似 abc/getALlUser
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
    //获取通过@Inject注入的依赖的token元数据
    const metadata = Reflect.getMetadata(INJECTABLE_TOKENS, Clazz) ?? {
      params: [],
      properties: {},
    };

    // 获取构造函数的参数类型（LoggerService / UseValueService 等）
    const constructorParams =
      Reflect.getMetadata(DESIGN_PARAMTYPES, Clazz) ?? [];

    // 构造函数依赖解析,比如loggerService通过StringToken获取对应的提供者
    const constructorDeps = constructorParams.map((param, index) => {
      const token = metadata.params[index] ?? param;
      return this.getProvider(token);
    });

    const instance = new Clazz(...constructorDeps);

    // 属性注入（如果有）
    for (const [key, token] of Object.entries(metadata.properties ?? {})) {
      instance[key] = this.getProvider(token);
    }

    return instance;
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
