//接口和类一样是可以继承的,并且接口是支持多继承的(类不支持多继承)
interface Animal {
  name: string;
  age: number;
}
interface Behavior {
  running: () => void;
}
interface Dog extends Behavior, Animal {}
const d: Dog = {
  name: "dik",
  age: 3,
  running() {
    console.log("跑");
  },
};
export {};
