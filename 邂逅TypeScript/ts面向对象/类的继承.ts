class Person {
  constructor(public name: string, public age: number) {}
  studying() {
    console.log(this.name + "在学习");
  }
}
class Student extends Person {
  constructor() {
    super("bik", 20);
  }
  //父类的函数默认会继承
}
const s1 = new Student();
console.log(s1.age);
console.log(s1.name);
s1.studying()
export {};
