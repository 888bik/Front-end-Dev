//如果将一个变量定义为any类型,那么在这个变量上做什么事情都是合法的,比如获取不存在的属性,方法,赋值
//如果是unknown类型,那么ts就不允许在这个变量做什么操作
const message1: string = "hello ts";
console.log(message1.length);

const message2: any = "hello react";
console.log(message2.length);

//操作不合法
const message3: unknown = "hello vue";
// console.log(message3.length);
//针对这种情况,可以使用类型缩小的手段,确保变量为字符串才可以进行对应的操作
if (typeof message3 === "string") {
  console.log(message3.length);
}

export {};
