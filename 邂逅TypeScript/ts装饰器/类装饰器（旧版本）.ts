function Logger(constructor: new (...args: any[]) => any) {
  console.log("类被创建了", constructor.name);
}

@Logger
class Person {}

new Person();
export {};
