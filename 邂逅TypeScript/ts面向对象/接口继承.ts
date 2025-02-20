//接口和类一样是可以继承的,并且接口是支持多继承的(类不支持多继承)
interface Person {
  name: string;
  age: number;
}
interface Animal {
  running: () => void;
}
interface Student extends Person, Animal {}
const p: Student = {
  name: "bik",
  age: 21,
  running() {
    console.log("跑步");
  },
};
export {};

