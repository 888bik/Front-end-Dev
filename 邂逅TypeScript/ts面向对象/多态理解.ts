class Shape {
  constructor(public width: number, public height: number) {}
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  constructor(width: number, height: number) {
    super(width, height);
  }
  getArea() {
    return this.width * this.height;
  }
}
class Circle extends Shape {
  constructor(width: number, height: number, public radius: number) {
    super(width, height);
  }
  getArea() {
    return this.radius * this.radius * 3.14;
  }
}

const r = new Rectangle(100, 200);
const c = new Circle(100, 300, 5);
console.log(r.getArea());
console.log(c.getArea());

function getArea(shape: Shape) {
  return shape.getArea();
}

console.log(getArea(r));
console.log(getArea(c));
