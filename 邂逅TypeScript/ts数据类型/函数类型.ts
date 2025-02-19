//ts中,函数也是类型的,函数类型用来描述函数接收什么类型参数,返回什么类型的值
// foo是一个函数,也是一个标识符,ts会根据函数推导foo的类型
function foo(arg: number): number {
  return 123;
}
//也可以显式指定函数的类型
// (num:number)=>void
const calc: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2;
};
calc(123, 456);
export {};
