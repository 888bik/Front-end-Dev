class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  private engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  drive() {
    this.engine.start();
    console.log("Car is driving");
  }
}

// 使用 Car 类，并注入 Engine 实例
const engine = new Engine();
const car = new Car(engine);
car.drive();

export {};
