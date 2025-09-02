import "reflect-metadata";
import { CanActivate } from "./can-activate.interface";
export function UseGuards(...guards: (CanActivate | Function)[]) {
  return function (
    target: Function | object,
    methodName?: string,
    descriptor?: TypedPropertyDescriptor<any>
  ) {
    if (descriptor) {
      Reflect.defineMetadata("guards", guards, descriptor.value);
    } else {
      Reflect.defineMetadata("guards", guards, target);
    }
  };
}
