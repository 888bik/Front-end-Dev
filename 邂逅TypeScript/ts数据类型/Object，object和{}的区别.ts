//Object表示所有的数据类型
//将strictNullChecks": false的时候,null和undefined可以赋值给Object类型
// const p1: Object = null;
// const p2: Object = undefined;
const p3: Object = "hello ts";
const p4: Object = 99;
console.log(p1, p2, p3, p4);

//而object表示除了基本数类型的其他类型，即数组，对象，函数类型
const o1: object = { name: "bik" };
const o2: object = () => {
  console.log("hello");
};

export {};
