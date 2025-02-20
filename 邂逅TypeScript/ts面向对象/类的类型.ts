//在ts中,类也可以作为一种类型
class Person {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  running() {
    console.log(this.name + "在跑步");
  }
}
const p1: Person = new Person("bik", 20);
const p2: Person = {
  name: "zsd",
  age: 21,
  running() {
    console.log("bik在跑步");
  },
};
console.log(p1.age);
console.log(p2.running());

export {};
