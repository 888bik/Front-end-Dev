// TypeScript对于类型检测的时候使用的鸭子类型
// 鸭子类型: 如果一只鸟, 走起来像鸭子, 游起来像鸭子, 看起来像鸭子, 那么你可以认为它就是一只鸭子
// 鸭子类型, 只关心属性和行为, 不关心你具体是不是对应的类型
class Person {
  constructor(public name: string, public age: number) {}
  running() {}
}
class Animal {
  constructor(public name: string, public age: number) {}
  running() {}
}
function printPerson(p: Person) {
  console.log(p.age, p.name);
}
printPerson(new Person("bik", 20));
//本来参数要求Person类型,但是Animal里的属性,方法都符合Person,所以ts认为这种也是合法的
printPerson(new Animal("lub", 3));
printPerson({ name: "kab", age: 10, running: function () {} });
const p: Person = new Animal("哈哈", 5);
export {};
