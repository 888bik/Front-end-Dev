function toUpperCase(value: undefined, context: ClassFieldDecoratorContext) {
  console.log(value);
  console.log(context);
  return function (initialValue: string) {
    return typeof initialValue === "string"
      ? initialValue.toUpperCase()
      : initialValue;
  };
}

class Person {
  @toUpperCase
  public name: string = "bik";
  constructor() {}
}

const p = new Person();
console.log(p.name);

export {};
