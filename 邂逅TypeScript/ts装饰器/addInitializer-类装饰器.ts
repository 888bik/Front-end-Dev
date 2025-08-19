function logger(value: Function, context: ClassDecoratorContext) {
  if (context.kind === "class") {
    context.addInitializer(function () {
      console.log(`Class ${context.name} is initialized.`);
    });
  }
}

@logger
class Person {
  constructor() {
    console.log("Constructor of MyClass called.");
  }
}

let p = new Person();
// Class Person is initialized.
// Constructor of MyClass called.
export {};
