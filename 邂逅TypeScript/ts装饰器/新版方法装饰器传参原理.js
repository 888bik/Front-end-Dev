//本质上是执行logMethod函数然后返回一个新的函数覆盖掉Person原型上原来的方法
//如果有传递参数,可以用一个函数接收参数,然后返回真正的装饰器函数
function logMethodWithParams(param) {
  return function (originalMethod, context) {
    if (context.kind === "method") {
      return function (...args) {
        const res = originalMethod.call(this, ...args);
        console.log(`I am new fu,${context.name}, with ${args} and ${param}`);
        return "new method";
      };
    }
  };
}

class Person {
  name = "bik";
  constructor() {}
  sayHello(name) {
    console.log(`Hello ${name}`);
  }
}

//先调用函数接收参数并返回一个真正的装饰器函数
Person.prototype.sayHello = logMethodWithParams(18)(Person.prototype.sayHello, {
  kind: "method",
  name: "sayHello",
});
new Person().sayHello("bik");

export {};
