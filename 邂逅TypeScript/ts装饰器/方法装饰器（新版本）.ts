function logMethod(
  originalMethod: Function,
  context: ClassMethodDecoratorContext
) {
  //返回一个新的函数替换掉旧的函数
  return function (...args: any[]) {
    //实例方法不会执行原来的逻辑，会被这里的逻辑替换掉
    console.log(`sayHello to ${args}`);
    return "hello111";
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

// new Person().sayHello("zsd");
const p = new Person();
const value = p.sayHello("zkz");
console.log(value);

export {};
