function logger(value: Function, context: ClassMethodDecoratorContext) {
  if (context.kind === "method") {
    context.addInitializer(function () {
      console.log(`Method ${String(context.name)} has been defined.`);
    });
  }
}

class Person {
  @logger
  sayHello() {
    console.log("sayHello is called");
  }
}

let p = new Person();
p.sayHello();
export {};
