function logger(value, context) {
  if (context.kind === "getter" || context.kind === "setter") {
    return function (...args) {
      console.log(`starting ${context.name} with arguments ${args.join(", ")}`);
      const ret = value.call(this, ...args);
      console.log(`ending ${context.name}`);
      return ret;
    };
  }
}

class Person {
  _name = "John";

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
}

let { set, get } = Object.getOwnPropertyDescriptor(Person.prototype, "name");
//重写get,set方法
set =
  logger(set, {
    kind: "setter",
    name: "name",
  }) ?? set;
get =
  logger(get, {
    kind: "getter",
    name: "name",
  }) ?? get;

Object.defineProperty(Person.prototype, "name", { set, get });
let p = new Person();
p.name = "bik";
console.log(p.name);

export {};
