//函数重载允许用多种方式声明函数的调用形式，从而更精确地描述函数的输入输出关系
//  一般是编写两个或者以上的重载签名，再去编写一个通用的函数以及实现
//先编写重载签名(定义调用形式)
function add(arg1: number, arg2: number): number;
function add(arg1: string, arg2: string): string;

//实现签名(实际实现)
function add(arg1: any, arg2: any): any {
  return arg1 + arg2;
}

//调用时根据参数类型匹配重载
const res1 = add(123, 123);
const res2 = add("abc", "cbd");

export {};
