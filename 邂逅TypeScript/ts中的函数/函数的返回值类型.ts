// 通常情况下不需要返回类型注解，因为TypeScript会根据 return 返回值推断函数的返回类型
function sum(number1: number, number2: number): number {
  return number1 + number2;
}
sum(33, 55);
export {};
