import "reflect-metadata";

interface ModuleMetadata {
  controllers: Function[];
}
//定义模块装饰器,用于标记一个类为 NestJS 模块，并提供模块的元数据。
export function Module(metadata: ModuleMetadata): ClassDecorator {
  return function (target: Function) {
    //给模块类添加元数据 AppModule,让框架在运行时能读取模块内有哪些控制器
    //元数据的名字叫controllers,值是controllers数组[AppController]
    Reflect.defineMetadata("controllers", metadata.controllers, target);
  };
}
