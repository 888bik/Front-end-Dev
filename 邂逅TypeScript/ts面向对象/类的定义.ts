//如果类型没有声明,默认是any
//在默认的strictPropertyInitialization模式下面属性必须初始化,否则报错

// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const p1 = new Person("bik", 20);
// console.log(p1.age);
// console.log(p1.name);

//简写:参数属性
class Person {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}
const p1 = new Person("bik", 20);
console.log(p1.age);
console.log(p1.name);
export {};
