interface IPerson {
  //构造签名:表示构造函数的类型定义
  //这里表示要求一个构造函数,该构造函数接收两个参数:name,age,并返回一个Person的实例
  new (name: string, age: number): Person;
}
class Person {
  constructor(public name: string, public age: number) {}
}
function factory(constructor: IPerson) {
  return new constructor("bik", 20); //相当于new Person()
}
//Person的构造函数符合IPerson的构造函数类型
factory(Person);
export {};
