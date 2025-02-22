//Instance作用:用于提取构造函数类型T的实例类型,核心作用是从一个类的构造函数或构造签名中,推断出其实例对象的类型
class Person {
  constructor(public name: string, public age: number) {}
}
class Dog {
  constructor(public name: string, public age: number) {}
}
//1.泛型约束:确保传入的参数是构造函数类型
//2.条件类型和类型推断:如果T是构造函数类型,则使用infer R 提取其实例类型Rj'k'j
type MyInstanceType<T extends new (...args: any[]) => any> = T extends new (
  ...args: any[]
) => infer R
  ? R
  : never;
// PersonInstance = Person
// type PersonInstance = InstanceType<typeof Person>;
type PersonInstance = MyInstanceType<typeof Person>;
//等同于直接使用Person类型:
const p1: Person = new Person("bik", 20);
// const p2: PersonInstance = new Person("zsd", 21);
const p2: PersonInstance = new Person("zsd", 21);

//构造函数例子:
function factory<T extends new (...args: any[]) => any>(
  constructor: T
): MyInstanceType<T> {
  return new constructor();
}

const p = factory(Person);
const d = factory(Dog);
export {};
