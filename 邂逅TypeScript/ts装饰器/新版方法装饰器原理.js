//本质上是执行logMethod函数然后返回一个新的函数覆盖掉Person原型上原来的方法
function logMethod(originalMethod, context) {
  if (context.kind === "method") {
    return function (...args) {
      const res = originalMethod.call(this, ...args);
      console.log(`I am new fu,${context.name}, with ${args}`);
      return "new method";
    };
  }
}

class Person {
  name = "bik";
  constructor() {}
  sayHello(name) {
    console.log(`Hello ${name}`);
  }
}

Person.prototype.sayHello = logMethod(Person.prototype.sayHello, {
  kind: "method",
  name: "sayHello",
});
new Person().sayHello("bik");

export {};
