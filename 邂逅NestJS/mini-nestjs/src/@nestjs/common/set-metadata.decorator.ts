import "reflect-metadata";
//SetMetadata是一个装饰器工厂,相当于装饰器函数带参
export function SetMetadata(
  metadataKey,
  metadataValue
): MethodDecorator & ClassDecorator {
  //返回一个装饰器函数
  return function (
    target: Function | object,
    key?: string | symbol,
    descriptor?: TypedPropertyDescriptor<any>
  ) {
    if (descriptor) {
      Reflect.defineMetadata(metadataKey, metadataValue, descriptor.value);
    } else {
      Reflect.defineMetadata(metadataKey, metadataValue, target);
    }
  };
}
