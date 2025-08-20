class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  private engine: Engine;

  constructor() {
    this.engine = new Engine();
  }

  drive() {
    this.engine.start();
    console.log("Car is driving");
  }
}

// 使用 Car 类
const car = new Car();
car.drive();

export {};
