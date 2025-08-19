//本质上是将传进来的类进行继承扩展,然后返回这个新的类
function LoggerWithParam(param) {
  return function (constructor, context) {
    if (context.kind === "class") {
      return class extends constructor {
        name = param;
        constructor(...args) {
          super(...args);
        }

        sayHello() {
          console.log("hello," + this.name, this.age);
        }
      };
    }
  };
}

class Person {
  age;
  constructor(age) {
    this.age = age;
  }
}

let newClass = LoggerWithParam("bik")(Person, {
  kind: "class",
  name: "Person",
});

new newClass(18).sayHello();

export {};
