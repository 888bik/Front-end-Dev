import "reflect-metadata";
import { SetMetadata } from "../common";
export class Reflector {
  static createDecorator<T>() {
    function decoratorFn(metadataValue) {
      return function (
        target: Function | object,
        key?: string | symbol,
        descriptor?: TypedPropertyDescriptor<any>
      ) {
        SetMetadata(decoratorFn, metadataValue)(target, key, descriptor);
      };
    }
    return decoratorFn;
  }
  // target 是目标对象，可以是类或类的原型
  // key 是可选参数，表示目标对象上的具体属性
  get(metadataKey: any, target: any, key?: string) {
    return key
      ? Reflect.getMetadata(metadataKey, target, key)
      : Reflect.getMetadata(metadataKey, target);
  }
}
