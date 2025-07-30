//有时候我们希望传入的类型有某些共性,但是这些共性可能不是在同一种类型中:
//比如string和array都是有length的,或者某些对象也是会有length属性的;
//那么只要是拥有length的属性都可以作为参数类型

interface ILength {
  length: number;
}
function getLength(arg: ILength) {
  return arg.length;
}

// const res1 = getLength(["bik", "zsd"]);
// const res2 = getLength({ length: 100 });

//T相当于是一个变量,用于记录本次调用的类型
function getInfo<T extends ILength>(arg: T) {
  return arg.length;
}
console.log(getInfo(["bik", "zsd"]));
console.log(getInfo("fjlasj;fklasjfklsa"));

export {};
