function classDecoratorFactory(prefix: string) {
  //约束只能传递类，即构造函数
  return function <T extends new (...args: any[]) => any>(
    constructor: T,
    context: ClassDecoratorContext
  ) {
    context.addInitializer(function () {
      console.log("类定义完成之后执行addInitializer");
    });
    //对target类进扩展并返回新的类替换target类
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        console.log(`${prefix}:类实例被创建`);
      }
    };
  };
}

@classDecoratorFactory("日志")
class Person {
  constructor(public name: string) {}
}

const p = new Person("bik");
console.log(p);

export {};
