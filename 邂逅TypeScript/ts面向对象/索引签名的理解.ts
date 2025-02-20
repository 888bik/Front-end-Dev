interface Person {
  name: string;
  age: number;
}
const p: Person = {
  name: "bik",
  age: 20,
};
console.log(p.age);

//索引签名:有时候不能提前知道一个类型里的所有属性的名字,但是知道这些值的特征
//这个时候可以用一个索引签名来描述可能的值的类型;
interface ICollection {
  //这里表示可以通过数字索引,去获取字符串类型的值
  [key: number]: string;
  length: number;
}
function printCollection(collection: ICollection) {
  for (let index = 0; index < collection.length; index++) {
    const element = collection[index];
    console.log(element);
  }
}
printCollection(["bik", "zsd", "zxb", "zkz"]);
printCollection("acbcbdnb");

export {};
