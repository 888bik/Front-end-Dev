function Logger<T extends new (...args: any[]) => any>(
  constructor: T,
  context: ClassDecoratorContext
) {
  return class extends constructor {
    public name = "bik";
    constructor(...args: any[]) {
      super(...args);
    }

    sayHello() {
      console.log("hello" + this.name);
    }
  };
}

@Logger
class Person {
  constructor(public age: number) {}
}

const person = new Person(18);
(person as any).sayHello();

//类被创建了 Person
export {};
