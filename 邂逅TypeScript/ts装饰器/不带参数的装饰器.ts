//装饰器就是一个函数，本来扩展功能
function FirstClassDecorator(targetClass: any) {
  //输出目标类，即Person
  console.log("targetClass", targetClass);
  //new 一个类，new Person
  let p = new targetClass("bik", 29);
  p.sleeping();
}

@FirstClassDecorator
class Person {
  constructor(public name: string, public age: number) {}
  sleeping() {
    console.log(this.name + "正在睡觉");
  }
  studying() {
    console.log(this.name + "正在学习");
  }
}

let pe = new Person("zsd", 18);

pe.sleeping();

export {};
