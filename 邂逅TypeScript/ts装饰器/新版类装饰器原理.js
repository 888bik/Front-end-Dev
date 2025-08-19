//本质上是将传进来的类进行继承扩展,然后返回这个新的类
function Logger(constructor, context) {
  if (context.kind === "class") {
    return class extends constructor {
      name = "bik";
      constructor(...args) {
        super(...args);
      }

      sayHello() {
        console.log("hello," + this.name, this.age);
      }
    };
  }
}

class Person {
  age;
  constructor(age) {
    this.age = age;
  }
}

let newClass = Logger(Person, {
  kind: "class",
  name: "Person",
});

new newClass(18).sayHello();

export {};
