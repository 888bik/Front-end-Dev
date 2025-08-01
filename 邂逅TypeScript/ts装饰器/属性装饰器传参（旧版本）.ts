function DefaultValue(value: string) {
  return function (target: any, key: string) {
    //target是Config的原型对象prototype
    target[key] = value;
  };
}
class Config {
  @DefaultValue("admin")
  username!: string;
  constructor() {}
}

//为什么没有实例化类装饰器也能执行?
//因为装饰器在类定义阶段就执行了
console.log(Config.prototype);

export {};
