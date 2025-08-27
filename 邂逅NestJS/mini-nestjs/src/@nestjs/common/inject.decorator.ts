import { INJECTABLE_TOKENS } from "./constants";

export function Inject(token: string | Function) {
  return function (
    target: any,
    propertyKey?: string | symbol,
    parameterIndex?: number
  ) {
    // 无论是 prototype 还是 class，都取 constructor 确保一致
    const clazz = typeof target === "function" ? target : target.constructor;

    // 先取已有的元数据，没有就初始化
    const metadata = Reflect.getMetadata(INJECTABLE_TOKENS, clazz) ?? {
      params: [],
      properties: {},
    };
    //构造函数参数装饰器
    if (typeof parameterIndex === "number") {
      metadata.params[parameterIndex] = token;
    } else {
      // 属性注入
      metadata.properties[propertyKey] = token;
    }

    Reflect.defineMetadata(INJECTABLE_TOKENS, metadata, clazz);
  };
}
