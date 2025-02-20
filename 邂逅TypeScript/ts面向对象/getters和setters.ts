//
class Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  set name(newValue) {
    this._name = newValue;
  }
  get name() {
    return this._name;
  }
}
const p = new Person("bik");
console.log(p.name);
p.name = "zsd";
console.log(p.name);
export {};
