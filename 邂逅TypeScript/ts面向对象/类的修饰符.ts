//跟Java差不多,ts有三个修饰符,分别是public,protected,private

class Person {
  constructor(private name: string, public age: number, protected sno: number) {
    this.name = name;
    this.age = age;
    this.sno = sno;
  }
}
let p1 = new Person("bik", 20, 123);
const p2 = new Person("zsd", 21, 999);

export {};
