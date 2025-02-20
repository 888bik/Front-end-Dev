//这种类型约束要求传入一个number类型,返回一个number类型
function foo(arg: number): number {
  return arg;
}
//但是如果想要传入其他类型,比如string,boolean,Person等类型就不行了,其实是可以将类型注解改为any,但是这样又失去类型检测
//我们希望可以动态的根据传入参数类型,动态的决定函数接收的参数类型
//这里就可以使用一种特性的变量,类型变量,它作用于类型,而是不值
function bar<T>(arg: T): T {
  return arg;
}
const res1 = bar<number>(123);
const res2 = bar<string>("哈哈哈");

//省略的写法,ts会自动推导
// const res1 = bar(123);
// let res2 = bar("哈哈哈");

export {};
