import "reflect-metadata";

//给请求方法添加路径前缀元属性,默认值为空
export function Get(path: string = ""): MethodDecorator {
  /**
   * target:为类的原型,比如AppController.prototype
   * descriptor:方法的属性描述符
   */
  return function (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    //给请求函数添加路径元属性,比如index方法 path = "/getAllUser"
    Reflect.defineMetadata("path", path, descriptor.value);

    //method = "GET"
    Reflect.defineMetadata("method", "GET", descriptor.value);
  };
}

export function Post(path: string = ""): MethodDecorator {
  return function (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    Reflect.defineMetadata("path", path, descriptor.value);

    Reflect.defineMetadata("method", "POST", descriptor.value);
  };
}

export function HttpCode(statusCode: number = 200): MethodDecorator {
  return function (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    Reflect.defineMetadata("statusCode", statusCode, descriptor.value);
  };
}

export function Header(key: string, value: string): MethodDecorator {
  return function (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const existingHeaders: any[] =
      Reflect.getMetadata("headers", descriptor.value) ?? [];
    existingHeaders.push({ key, value });
    Reflect.defineMetadata("headers", existingHeaders, descriptor.value);
  };
}

export function Redirect(
  url: string = "/",
  statusCode: number = 302
): MethodDecorator {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    Reflect.defineMetadata("redirectUrl", url, descriptor.value);
    Reflect.defineMetadata("redirectStatusCode", statusCode, descriptor.value);
  };
}
