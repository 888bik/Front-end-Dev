function logger(value, context) {
  if (context.kind === "accessor") {
    let { get, set } = value;
    return {
      get() {
        let val = get.call(this);
        console.log(`getting ${context.name} the value is ${val}`);
        return val
      },
      set(val) {
        console.log(`setting ${context.name} to ${val}`);
        return set.call(this, val);
      },
      init(initialValue) {
        console.log(`initializing ${context.name} with value ${initialValue}`);
        return initialValue;
      },
    };
  }
}

class Person {
  #name = initialName("bik");
  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }
}

//获取类属性原先的get,set
let { set: oldSet, get: oldGet } = Object.getOwnPropertyDescriptor(
  Person.prototype,
  "name"
);

//重写get,set,并设置默认值
let {
  set: newSet = oldSet,
  get: newGet = oldGet,
  init: initialName = (value) => value,
} = logger({ set: oldSet, get: oldGet }, { kind: "accessor", name: "name" }) ??
{};

Object.defineProperty(Person.prototype, "name", { set: newSet, get: newGet });

const p = new Person();
p.name = "zsd";
console.log(p.name);
export {};
