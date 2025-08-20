import "reflect-metadata";
function Injectable(): ClassDecorator {
  return (target: Function) => {
    // 这个装饰器不需要执行任何操作，仅用于元数据生成
  };
}

@Injectable()
class Engine {
  start() {
    console.log("Engine started");
  }
}

@Injectable()
class Car {
  constructor(private engine: Engine) {}

  drive() {
    this.engine.start();
    console.log("Car is driving");
  }
}
class DIContainer {
  //存储所有服务的Map对象
  private services = new Map<string, any>();

  /**
   * 用于注册所有服务到容器中
   * @param name 类名
   * @param Service 服务类
   */
  register<T>(name: string, Service: new (...args: any[]) => T) {
    this.services.set(name, Service);
  }
  /**
   * 将所需的依赖类实例注入到类中
   * @param name 类名
   * @returns 返回一个实例
   */
  resolve<T>(name: string): T {
    const service = this.services.get(name);
    if (!service) {
      throw new Error(`Service ${name} not found`);
    }
    //获取services所需的依赖类,比如Car依赖Engine
    const dependencies: any[] =
      Reflect.getMetadata("design:paramtypes", service) || [];

    //递归调用,比如Car需要Engine,而Engine可能依赖其他类
    const injections = dependencies.map((dependency) => {
      return this.resolve<any>(dependency.name);
    });
    //将实例注入到类的构造函数中初始化
    return new service(...injections);
  }
}
const container = new DIContainer();
container.register<Car>("Car", Car);
container.register<Engine>("Engine", Engine);
const car = container.resolve<Car>("Car");
car.drive();
