import "reflect-metadata";
export function createParamsDecorator(key: string) {
  //给方法上的参数添加元数据
  /**
   * target:类的原型对象prototype
   * methName:方法名
   * paramsIndex:参数索引
   */
  return function (target: any, methodName: string, paramIndex: number) {
    //问题:如何保存方法对应的参数在他的元数据上呢
    const existingParameters =
      Reflect.getMetadata("params", target, methodName) || [];
    existingParameters.push({ paramIndex, key });
    //[{ parameterIndex: 1, key: 'Request' },{ parameterIndex: 0, key: 'Req' }]
    Reflect.defineMetadata("params", existingParameters, target, methodName);
  };
}
//因为有多种参数装饰器,所以用一个参数装饰器工厂来创建
export const Req = createParamsDecorator("Req");
export const Request = createParamsDecorator("Request");
