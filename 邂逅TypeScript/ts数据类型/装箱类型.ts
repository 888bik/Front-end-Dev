//以String为例，String装箱类型包含了string,null,undefined,void
//基本等于new String("")
const p1: String = "hello ts";
// const p2: String = null;
// const p3: String = undefined;
// const p4: String = void 0;
const p5 = new String("hello js");

console.log(void 0 === undefined); //true
console.log(typeof p1); //string
// console.log(typeof p4); //undefined

//同理
const n1: Number = 91;
// const n2: Number = undefined;

export {};
