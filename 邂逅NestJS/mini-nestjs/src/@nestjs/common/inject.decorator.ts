import { INJECTABLE_TOKENS } from "./constant";

export function Inject(token: string | Function) {
  return function (
    target: any,
    propertyKey?: string | symbol,
    parameterIndex?: number
  ) {
    //构造函数参数装饰器
    if (typeof parameterIndex === "number") {
      const existingInjectTokens =
        Reflect.getMetadata(INJECTABLE_TOKENS, target) ?? [];
      existingInjectTokens[parameterIndex] = token;
      Reflect.defineMetadata(INJECTABLE_TOKENS, existingInjectTokens, target);
    } else {
    }
  };
}
