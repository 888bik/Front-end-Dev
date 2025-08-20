import "reflect-metadata";
/**
 * Injectable 装饰器
 * 作用：标记一个类为“可注入的服务”
 * 虽然这里没有执行逻辑，但它的存在可以触发 TypeScript 编译器
 * 生成设计时的类型元数据（配合 emitDecoratorMetadata 使用）
 */
function Injectable(): ClassDecorator {
  return (target: Function) => {};
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
  // 存储服务的 Map 对象
  private services = new Map<string, new (...args: any[]) => any>();

  /**
   * 注册一个服务类到容器中
   * @param Service 要注册的类（构造函数）
   */
  register<T>(Service: new (...args: any[]) => T) {
    this.services.set(Service.name, Service);
  }
  /**
   * 解析并实例化一个服务，同时自动注入其依赖
   * @param Service 要解析的类（构造函数）
   * @returns 该类的实例
   */
  resolve<T>(Service: new (...args: any[]) => T): T {
    // 从容器中取出对应的类
    const service = this.services.get(Service.name);
    if (!service) {
      throw new Error(`${service} not found`);
    }

    // 获取构造函数参数的类型信息（依赖列表）
    // 例如 Car 的构造函数参数类型是 [Engine]
    const dependencies =
      Reflect.getMetadata("design:paramtypes", Service) ?? [];

    // 递归解析依赖（如果 Engine 还有依赖，也会继续解析）
    const injections = dependencies.map((dependency) => {
      return this.resolve(dependency);
    });

    // 使用依赖实例创建该类实例
    return new service(...injections);
  }
}

const container = new DIContainer();
container.register(Car);
container.register(Engine);
const car = container.resolve(Car);
car.drive();

export {};
