function ReadOnly(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.set = function () {
    throw new Error("此属性为只读");
  };
  return descriptor;
}

class Person {
  constructor(private _name: string) {}

  @ReadOnly
  set name(name: string) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
}
const p = new Person("bik");
p.name = "zsd";
console.log(p.name);

export {};
