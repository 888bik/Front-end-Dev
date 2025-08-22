import "reflect-metadata";

interface ModuleMetadata {
  controllers?: Function[];
  providers?: any[];
  imports?: any[];
  exports?: any[];
}
//定义模块装饰器,用于标记一个类为 NestJS 模块，并提供模块的元数据。
export function Module(metadata: ModuleMetadata): ClassDecorator {
  return function (target: Function) {
    //给模块类添加元数据 AppModule,让框架在运行时能读取模块内有哪些控制器
    //元数据的名字叫controllers,值是controllers数组[AppController]
    Reflect.defineMetadata("controllers", metadata.controllers, target);
    //给每一个controller添加一个标识，表示这是一个单独的模块
    defineModule(target, metadata.controllers);
    // metadata.controllers.forEach((controller) => {
    //   Reflect.defineMetadata("module", target, controller);
    // });
    //添加providers元数据 [LoggerService]
    Reflect.defineMetadata("providers", metadata.providers, target);
    defineModule(target, metadata.providers ?? []);
    Reflect.defineMetadata("imports", metadata.imports, target);
    Reflect.defineMetadata("exports", metadata.exports, target);
    //给模块做一个标识,表示该类为一个模块
    Reflect.defineMetadata("isModule", true, target);
  };
}
export function defineModule(module, targets = []) {
  targets.forEach((target) => Reflect.defineMetadata("module", module, target));
}

export function Global(): ClassDecorator {
  return function (target: Function) {
    Reflect.defineMetadata("global", true, target);
  };
}
