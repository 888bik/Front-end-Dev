import "reflect-metadata";
export function createParamsDecorator(keyOrFactory: string | Function) {
  /**
   * 给方法上的参数添加元数据
   * target:类的原型对象prototype
   * methName:方法名
   * paramsIndex:参数索引
   */
  return (data?: any, ...pipes) =>
    (target: any, methodName: string, paramIndex: number) => {
      const existingParameters =
        Reflect.getMetadata("params", target, methodName) || [];
      if (keyOrFactory instanceof Function) {
        //如果是函数,格式类似这样:{parameterIndex:1,key:"DecoratorFactory",factory:Function(){},data:"age"}
        existingParameters.push({
          paramIndex,
          key: "DecoratorFactory",
          factory: keyOrFactory,
          data,
          pipes,
        });
      } else {
        //格式像这样:{ parameterIndex: 1, key: 'Request',data:"id" },{ parameterIndex: 0, key: 'Req',data:"user" }]
        existingParameters.push({ paramIndex, key: keyOrFactory, data, pipes });
      }
      Reflect.defineMetadata("params", existingParameters, target, methodName);
    };
}
//因为有多种参数装饰器,所以用一个参数装饰器工厂来创建
export const Req = createParamsDecorator("Req");
export const Request = createParamsDecorator("Request");
export const Query = createParamsDecorator("Query");
export const Headers = createParamsDecorator("Headers");
export const Session = createParamsDecorator("Session");
export const Ip = createParamsDecorator("Ip");
export const Param = createParamsDecorator("Param");
export const Body = createParamsDecorator("Body");
export const Response = createParamsDecorator("Response");
export const Res = createParamsDecorator("Res");
export const Next = createParamsDecorator("Next");
