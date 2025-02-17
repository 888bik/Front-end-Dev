//写法一;
// const books: string[] = [
//   "Redis高手心法",
//   "typeScript权威指南",
//   "深入理解Linux内核",
// ];
//写法二:
const books: Array<String> = ["JVM原理", "图解算法", "操作系统原理"];

// object对象类型用来描述一个对象
const obj: object = {
  name: "bik",
  age: 20,
};
//但是不能从obj中获取数据,也不能设置数据

// console.log(obj.age);
export {};
