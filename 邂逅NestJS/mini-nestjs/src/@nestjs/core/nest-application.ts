import "reflect-metadata";

import express, { Express } from "express";
import type { Request, Response, NextFunction } from "express";
import { Logger } from "./logger";
import path from "path";
import {
  defineModule,
  DESIGN_PARAMTYPES,
  INJECTABLE_TOKENS,
  IRoute,
  RequestMethod,
  NestMiddleware,
  GlobalHttpExceptionFilter,
  ArgumentsHost,
  ExceptionFilter,
  HttpException,
  PipeTransform,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from "../common";
import {
  APP_FILTER,
  APP_GUARD,
  APP_PIPE,
  FORBIDDEN_MESSAGE,
} from "./constants";
import { Reflector } from "./reflector";
import { AuthGuard } from "src/auth.guard";

export class NestApplication {
  //在内部创建一个express应用
  private readonly app: Express = express();
  //用于保存所有的提供者
  private readonly providerInstancePool = new Map();
  //用于保存全局注册的提供者
  private readonly globalProviders = new Set();
  //记录每个模块有哪些token，可以根据这个token去实例池中找到对应的实例
  private readonly moduleProviders = new Map();
  //保存所有的中间件
  private readonly middlewares = [];

  private readonly excludedRoutes = [];

  private defaultGlobalHttpExceptionFilter = new GlobalHttpExceptionFilter();

  private readonly globalHttpExceptionFilters: ExceptionFilter[] = [];

  private readonly globalPipes: PipeTransform[] = [];

  private readonly globalGuards: CanActivate[] = [];

  constructor(protected readonly module: any) {
    this.app.use(express.json()); //用来把JSON格式的请求体对象放在req.body上
    this.app.use(express.urlencoded({ extended: true })); //把form表单格式的请求体对象放在req.body
  }

  private async initMiddleware() {
    this.module.prototype.configure?.(this);
  }

  private apply(...middleware): this {
    defineModule(this.module, middleware);
    this.middlewares.push(...middleware);
    return this;
  }

  private exclude(...routes: IRoute[]) {
    this.excludedRoutes.push(...routes);
    return this;
  }

  private forRoutes(...routes: IRoute[]) {
    //遍历每个传入的路径，给每个路径添加中间件
    for (const route of routes) {
      const { routeMethod, routePath } = this.normalizeRouteInfo(route);
      for (const middleware of this.middlewares) {
        this.app.use(
          routePath,
          (req: Request, res: Response, next: NextFunction) => {
            //排除路由
            if (this.isExcluded(req.originalUrl, req.method)) {
              return next();
            }

            if (
              routeMethod === req.method ||
              routeMethod === RequestMethod.ALL
            ) {
              //middleware可能是一个函数中间件，也可能是一个类中间件
              if ("use" in middleware || "use" in middleware.prototype) {
                const middlewareInstance = this.resolveDependencies(middleware);
                //执行逻辑
                middlewareInstance.use(req, res, next);
              } else if (middleware instanceof Function) {
                middleware(req, res, next);
              } else {
                next();
              }
            } else {
              next();
            }
          }
        );
      }
    }
    this.middlewares.length = 0;
    return this;
  }

  private isExcluded(reqPath, method): boolean {
    return this.excludedRoutes.some((routeInfo) => {
      const { routePath, routeMethod } = this.normalizeRouteInfo(routeInfo);
      return (
        routePath === reqPath &&
        (routeMethod === method || routeMethod === RequestMethod.ALL)
      );
    });
  }

  /**
   * 统一格式化路径参数
   * @param route 路由路径，可能是字符串，也可能是一个对象
   */
  private normalizeRouteInfo(route: IRoute) {
    let routePath = "";
    let routeMethod = RequestMethod.ALL;
    if (typeof route === "string") {
      routePath = route;
    } else if ("path" in route) {
      routePath = route.path;
      routeMethod = route.method ?? RequestMethod.ALL;
    } else if (route instanceof Function) {
      routePath = Reflect.getMetadata("prefix", route);
    }
    routePath = path.posix.join("/", routePath);
    return {
      routePath,
      routeMethod,
    };
  }

  private addCoreProvider() {
    this.addProvider(Reflector, this.module, true);
  }

  private async initProviders() {
    this.addCoreProvider();
    //获取根模块import进来的模块的元数据
    const imports = Reflect.getMetadata("imports", this.module) ?? [];
    //遍历imports数组
    for (const importedModule of imports) {
      let importModule = importedModule;
      //如果导入的是一个Promise，说是它是异步的动态模块
      if (importModule instanceof Promise) {
        importModule = await importModule;
      }
      //如果导入的模块有module属性，说明是一个动态模块
      if ("module" in importModule) {
        //获取扩展的元数据
        const { controllers, exports, module, providers } = importModule;
        const oldProviders = Reflect.getMetadata("providers", module);
        const newProviders = [...(oldProviders ?? []), ...(providers ?? [])];
        //将最新的providers存储在当前模块
        Reflect.defineMetadata("providers", newProviders, module);
        //进行模块隔离
        defineModule(module, newProviders);
        const oldControllers = Reflect.getMetadata("controllers", module);
        const newControllers = [
          ...(oldControllers ?? []),
          ...(controllers ?? []),
        ];
        Reflect.defineMetadata("controllers", newControllers, module);
        defineModule(module, newControllers);

        const oldExports = Reflect.getMetadata("exports", module);
        const newExports = [...(oldExports ?? []), ...(exports ?? [])];
        Reflect.defineMetadata("exports", newExports, module);

        this.registerProviderFromModule(module, this.module);
      } else {
        this.registerProviderFromModule(importedModule, this.module);
      }
    }
    //获取当前模块提供者的元数据
    const providers = Reflect.getMetadata("providers", this.module) ?? [];
    //遍历注册个提供者
    for (const provider of providers) {
      this.addProvider(provider, this.module);
    }
  }

  private addProvider(provider, module, global = false) {
    //判断是否是全局注册将provide添加到不同的集合中,如果不存在则创建module对应的set
    const providersSet = global
      ? this.globalProviders
      : this.moduleProviders.get(module) || new Set();

    if (!global) {
      this.moduleProviders.set(module, providersSet);
    }

    //为了避免循环依赖，每次添加前可以做一个判断，如果Map中已经存在，则直接返回
    const injectedProviderToken = provider.provide ?? provider;
    //如果实例池里已经有此token对应的实例了
    if (this.providerInstancePool.has(injectedProviderToken)) {
      //则直接把此token放入到providers这个集合直接返回
      if (!providersSet.has(injectedProviderToken)) {
        providersSet.add(injectedProviderToken);
      }
      return;
    }

    if (provider.provide) {
      if (provider.useValue) {
        //存储实例
        this.providerInstancePool.set(provider.provide, provider.useValue);
        //provider的token存到模块的providerSet中
        providersSet.add(provider.provide);
      } else if (provider.useClass) {
        const instance = this.resolveDependencies(provider.useClass);
        this.providerInstancePool.set(provider.provide, instance);
        providersSet.add(provider.provide);
      } else if (provider.useFactory) {
        const injectTokens = provider.inject || [];
        const injectDeps = injectTokens.map((token) => {
          return this.getProvider(token, module);
        });
        const instance = provider.useFactory(...injectDeps);
        this.providerInstancePool.set(provider.provide, instance);
        providersSet.add(provider.provide);
      }
    } else {
      const instance = this.resolveDependencies(provider);
      this.providerInstancePool.set(provider, instance);
      providersSet.add(provider);
    }
  }

  private registerProviderFromModule(module, ...parentsModule) {
    const global = Reflect.getMetadata("global", module);
    //获取模块的所有providers
    const providers = Reflect.getMetadata("providers", module) || [];

    //获取模块的export的provider
    const exportsProviders = Reflect.getMetadata("exports", module) || [];
    for (const exportTokens of exportsProviders) {
      //export有可能是其他模块,所以先判断这个导出的是否是模块(模块的重新导出)
      if (this.isModule(exportTokens)) {
        //递归调用
        this.registerProviderFromModule(exportTokens, module, ...parentsModule);
      } else {
        //判断导入的当前模块是否有exports对应的服务
        const provider = providers.find(
          (provider) =>
            provider.provide === exportTokens || provider === exportTokens
        );
        if (provider) {
          [module, ...parentsModule].forEach((module) => {
            this.addProvider(provider, module, global);
          });
        }
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
      const controllerFilters =
        Reflect.getMetadata("filters", Controller) ?? [];
      const controllerPipes = Reflect.getMetadata("pipes", Controller) ?? [];
      const controllerGuards = Reflect.getMetadata("guards", Controller) ?? [];
      //从每个controller类获取前缀prefix,如果没有前缀则默认"/"
      const prefixPath = Reflect.getMetadata("prefix", Controller) || "/";
      //开始解析路由
      Logger.log(`${Controller.name} {${prefixPath}}`, "RoutesResolver");
      const controllerPrototype = Controller.prototype;
      //从每个实例对象上获取所有方法
      for (const methodName of Object.getOwnPropertyNames(
        controllerPrototype
      )) {
        //获取实例对象上的方法
        const method = controllerPrototype[methodName];
        const methodFilters = Reflect.getMetadata("filters", method) ?? [];
        const methodPipes = Reflect.getMetadata("pipes", method) ?? [];
        const methodGuards = Reflect.getMetadata("guards", method) ?? [];
        //合并pipe
        const pipes = [...controllerPipes, ...methodPipes];
        //合并guard
        const guards = [
          ...this.globalGuards,
          ...controllerGuards,
          ...methodGuards,
        ];

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
          async (request: Request, response: Response, next: NextFunction) => {
            const host: ArgumentsHost = {
              switchToHttp: () => ({
                getRequest: () => request,
                getResponse: () => response,
                getNext: () => next,
              }),
            };
            const context: ExecutionContext = {
              ...host,
              getClass: () => Controller,
              getHandler: () => method,
            };
            try {
              //执行守卫
              await this.callGuards(guards, context);

              //获取方法参数
              const args = await this.getMethodParams(
                controller,
                methodName,
                request,
                response,
                next,
                host,
                pipes
              );
              //显示调用controller的特定方法并传入参数
              const result = await method.call(controller, ...args);

              //判断如果需要重定向，则直接重定向到指定的redirectUrl并指定重定向状态码
              if (redirectUrl) {
                return response.redirect(
                  redirectStatusCode || 302,
                  redirectUrl
                );
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
            } catch (error) {
              this.callExceptionFilters(
                error,
                host,
                controllerFilters,
                methodFilters
              );
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

  private async callGuards(guards: CanActivate[], context: ExecutionContext) {
    for (const guard of guards) {
      const guardInstance = this.getGuardsInstance(guard);
      const canActivate = await guardInstance.canActivate(context);
      //如果返回的不是true,则说明校验失败,抛出异常
      if (!canActivate) {
        throw new ForbiddenException(FORBIDDEN_MESSAGE);
      }
    }
  }

  private getGuardsInstance(guard: CanActivate | Function): CanActivate {
    if (typeof guard === "function") {
      const instance = this.resolveDependencies(guard);
      return instance;
    }
    return guard;
  }

  private callExceptionFilters(error, host, controllerFilters, methodFilters) {
    const allFilters = [
      ...methodFilters,
      ...controllerFilters,
      ...this.globalHttpExceptionFilters,
      this.defaultGlobalHttpExceptionFilter,
    ];
    defineModule(this.module, [...methodFilters, ...controllerFilters]);
    for (const filter of allFilters) {
      const filterInstance = this.getFilterInstance(filter);
      //取出此异常过滤器关心的异步或者说要处理的异常
      const exceptions =
        Reflect.getMetadata("catch", filterInstance.constructor) ?? [];
      //如果没有配置catch,或者说当前的错误刚好就是配置的catch的exception的类型或者它的子类
      if (
        exceptions.length === 0 ||
        exceptions.some((exception) => error instanceof exception)
      ) {
        filterInstance.catch(error, host);
        break;
      }
    }
  }

  private getFilterInstance(filter) {
    //判断filter是类还是实例
    if (filter instanceof Function) {
      const instance = this.resolveDependencies(filter);
      return instance;
    }
    return filter;
  }

  useGlobalFilters(...filters) {
    defineModule(
      this.module,
      filters.filter((filter) => filter instanceof Function)
    );
    this.globalHttpExceptionFilters.push(...filters);
  }

  async initGlobalExceptionFilters() {
    const providers = Reflect.getMetadata("providers", this.module);
    const appFilterProvider = providers.find(
      (provider) => provider.provide === APP_FILTER
    );

    if (appFilterProvider) {
      this.addProvider(appFilterProvider, this.module, true);
    }
  }

  useGlobalGuards(...guards) {
    this.globalGuards.push(...guards);
  }

  async initGlobalGuards() {
    const providers = Reflect.getMetadata("providers", this.module);
    for (const provider of providers) {
      if (provider.provide === APP_GUARD) {
        const instance = this.resolveDependencies(provider.useClass);
        // const instance = this.getProvider(APP_GUARD, this.module);
        console.log(instance);
        this.useGlobalGuards(instance);
      }
    }
  }

  /**
   *
   * @param clazz 类
   * @returns
   */
  private resolveDependencies(Clazz) {
    //获取通过@Inject注入的依赖的token元数据
    const metadataToken = Reflect.getMetadata(INJECTABLE_TOKENS, Clazz) ?? {
      params: [],
      properties: {},
    };
    //判断Clazz属于哪个模块
    const metadataModule = Reflect.getMetadata("module", Clazz);
    // 获取构造函数的参数类型（LoggerService / UseValueService 等）
    const constructorParams =
      Reflect.getMetadata(DESIGN_PARAMTYPES, Clazz) ?? [];

    // 构造函数依赖解析,比如loggerService通过StringToken获取对应的提供者
    const constructorDeps = constructorParams.map((param, index) => {
      const token = metadataToken.params[index] ?? param;
      return this.getProvider(token, metadataModule);
    });
    const instance = new Clazz(...constructorDeps);

    // 属性注入（如果有）
    for (const [key, token] of Object.entries(metadataToken.properties ?? {})) {
      instance[key] = this.getProvider(token, metadataModule);
    }
    return instance;
  }

  private getProvider(injectedToken, module = this.module) {
    if (
      this.moduleProviders.get(module)?.has(injectedToken) ||
      this.globalProviders.has(injectedToken)
    ) {
      return this.providerInstancePool.get(injectedToken);
    } else {
      return null;
    }
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
  private async getMethodParams(
    instance: any,
    methodName: string,
    request: Request,
    response: Response,
    next: NextFunction,
    host: ArgumentsHost,
    pipes: PipeTransform[]
  ) {
    const paramsMetadata: any[] = Reflect.getMetadata(
      "params",
      instance,
      methodName
    );
    if (!paramsMetadata || paramsMetadata.length === 0) return [];
    // [ { paramIndex: 1, key: 'Request' }, { paramIndex: 0, key: 'Req' } ]
    //获取类似上面这种格式的参数元数据,对其排列,因为正常来说都是索引为0的排在第一
    return Promise.all(
      paramsMetadata
        .sort((a, b) => {
          return a.paramIndex - b.paramIndex;
        })
        .map(async (paramsMetadata) => {
          const {
            key,
            data,
            factory,
            pipes: paramPipes,
            metatype,
          } = paramsMetadata;
          let value;
          switch (key) {
            case "Request":
            case "Req":
              value = request;
              break;
            case "Query":
              value = data ? request.query[data] : request.query;
              break;
            case "Headers":
              value = data ? request.headers[data] : request.headers;
              break;
            case "Session":
              value = data ? request.session[data] : request.session;
              break;
            case "Ip":
              value = request.ip;
              break;
            case "Param":
              value = data ? request.params[data] : request.params;
              break;
            case "Body":
              value = data ? request.body[data] : request.body;
              break;
            case "Response":
            case "Res":
              value = response;
              break;
            case "Next":
              value = next;
              break;
            case "DecoratorFactory":
              //执行函数得到结果并返回
              value = factory(data, host);
              break;
            default:
              value = null;
              break;
          }
          for (const pipe of [...this.globalPipes, ...pipes, ...paramPipes]) {
            const PipeInstance = this.getPipeInstance(pipe);
            value = await PipeInstance.transform(value, {
              type: key,
              data,
              metatype,
            });
          }
          return value;
        })
    );
    //return [req,req]
  }

  private getPipeInstance(pipe) {
    if (pipe instanceof Function) {
      const PipeInstance = this.resolveDependencies(pipe);
      return PipeInstance;
    }
    return pipe;
  }
  useGlobalPipes(...pipes: PipeTransform[]) {
    this.globalPipes.push(...pipes);
  }
  private async initGlobalPipes() {
    const providers = Reflect.getMetadata("providers", this.module) || [];
    for (const provider of providers) {
      if (provider.provide === APP_PIPE) {
        const instance = this.getProvider(APP_PIPE, this.module);
        this.useGlobalPipes(instance);
      }
    }
  }
  /**
   * 用于初始化并启动一个express服务
   * @param port 端口号
   */
  async listen(port: number) {
    await this.initProviders();
    await this.initGlobalExceptionFilters();
    await this.initMiddleware();
    await this.initGlobalGuards();
    await this.initGlobalPipes();
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
