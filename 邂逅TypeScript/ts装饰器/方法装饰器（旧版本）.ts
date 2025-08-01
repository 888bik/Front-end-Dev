function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`调用方法${originalMethod}`);
    return originalMethod.apply(this, args);
  };
}

class Person {
  public name: string = "bik";
  constructor() {}
  @logMethod
  sayHello(name: string) {
    console.log(`Hello ${name}`);
  }
}

new Person().sayHello("zsd");

export {};
