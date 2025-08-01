function LogMethod(prefix: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    //target为类的原型，即Dog.prototype
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`${prefix}:调了了方法${key}`);
      return originalMethod.apply(this, args);
    };
  };
}

class Dog {
  @LogMethod("Dog方法日志")
  bark() {
    console.log("汪汪汪");
  }
}
const d = new Dog();
d.bark();

export {};
