function logMethod(prefix: string) {
  return function (
    originalMethod: Function,
    context: ClassMethodDecoratorContext
  ) {
    return function (...args: any[]) {
      console.log(context.name);
      console.log(prefix + "：调用方法" + String(context.name));
      return originalMethod(args);
    };
  };
}

class Hello {
  @logMethod("👋 方法日志")
  greet(name: string) {
    console.log(`Hi, ${name}`);
  }
}
