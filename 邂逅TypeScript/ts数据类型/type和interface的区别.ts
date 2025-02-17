//interface和type的区别:
//如果是定义非对象类型,通常推荐使用type
//如果是定义对象类型,通常推荐使用interface:因为interface可以重复对某一个接口来定义属性和方法,而type定义的是别名,别名是不能重复的
type point = {
  x: number;
  y: number;
};
type point2 = {};

//interface可以重复定义,此时定义的所有属性会被联合起来
interface info {
  name: string;
  age: number;
}
interface info {
  address: string;
  height: number;
}

function printInfo(info: info) {
  console.log(info.name);
  console.log(info.age);
}
printInfo({ name: "bik", height: 1.88, address: "清远", age: 20 });

export {};
