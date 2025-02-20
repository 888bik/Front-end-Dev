class Person<T> {
  constructor(public name: T, public age: number) {}
}
const p = new Person("bik", 20);
const s = new Person<number>(123, 321);
export {};
