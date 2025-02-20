//抽象方法:在ts中没有具体实现的方法(没有方法体)
//抽象类的特点:抽象类是不能被实现的,抽象方法必须被子类实现
abstract class Shape {
  abstract getArea(): number;
}
class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
class Circle extends Shape {
  constructor(public radius: number, public PI: number = 3.14) {
    super();
    this.radius = radius;
    this.PI = PI;
  }
  getArea(): number {
    return this.PI * (this.radius * this.radius);
  }
}
// const c = new Circle(32);
// const res = c.getArea();
// console.log(res);
export {};
