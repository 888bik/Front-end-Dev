import "reflect-metadata";

export function UseInterceptors(...interceptor) {
  return function (
    target: object | Function,
    propertyKey?: string,
    descriptor?: TypedPropertyDescriptor<any>
  ) {
    if (descriptor) {
      const existingInterceptors =
        Reflect.getMetadata("interceptors", descriptor.value) ?? [];
      Reflect.defineMetadata(
        "interceptors",
        [...existingInterceptors, ...interceptor],
        descriptor.value
      );
    } else {
      const existingInterceptors =
        Reflect.getMetadata("interceptors", target) ?? [];
      Reflect.defineMetadata(
        "interceptors",
        [...existingInterceptors, ...interceptor],
        target
      );
    }
  };
}
