function logGetter(value: any, context: ClassGetterDecoratorContext) {
  console.log("这是 getter 装饰器，名字是：" + String(context.name));
}

class Person {
  private _name = "John";

  @logGetter
  get nameAccessor() {
    return this._name;
  }
}
export {};
