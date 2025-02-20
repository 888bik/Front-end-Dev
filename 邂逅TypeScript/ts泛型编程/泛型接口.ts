//泛型也可以设置默认值
interface Person<T = string> {
  name: T;
  age: number;
}
const p1: Person<string> = {
  name: "bik",
  age: 20,
};
const p2: Person<number> = {
  name: 123,
  age: 21,
};


export {};
