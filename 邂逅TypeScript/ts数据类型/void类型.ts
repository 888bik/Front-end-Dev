//在ts中如果一个函数没有返回值,那么他的返回值类型就是void类型
//如果返回值类型是void,那么也可以返回undefined
function calc(num1: number, num2: number): void {
  return undefined
}

calc(1, 2);
export {};
