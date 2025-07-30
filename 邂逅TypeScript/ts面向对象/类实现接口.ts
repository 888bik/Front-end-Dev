//接口也能被类实现
interface ISwim {
  swimming: () => void;
}
interface IRun {
  running: () => void;
}
class Student implements ISwim, ISwim {
  constructor(public name: string, public age: number) {}
  running() {
    console.log(this.name + "跑步");
  }
  swimming() {
    console.log(this.name + "游泳");
  }
}
const s = new Student("bik", 20);

function swim(swimmer: ISwim) {
  swimmer.swimming();
}
//如果接口被一个类实现之后,那么在之后需要传入接口的地方,都可以将这个类的实例传入
//因为Student类的实例符合接口的要求(有一个swimming方法),这种机制是鸭子类型,ts不关系对象的实际接口是什么,只要对象符合接口的要求就可以
swim(s);

export {};
