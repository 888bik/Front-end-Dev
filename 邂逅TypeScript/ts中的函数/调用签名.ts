//在js中,函数除了可以被调用,自身也可以有属性
//如果想描述一个带有属性的函数,可以在一个对象类型中写一个调用签名
interface ICalFn {
  name: string;
  (num1: number, num2: number): number;
}
function excCalc(calcFn: ICalFn) {
  const res = calcFn(123, 34);
  console.log(res);
  console.log(calcFn.name);
}

function sum(num1: number, num2: number) {
  return num1 + num2;
}

//直接修改会报错,ts会把函数中的属性当作只读属性,不能对其进行修改
// sum.name = "bik";
//可以通过使用Object.defineProperty修改name属性：虽然默认情况下函数的name是只读的，但它是可配置的（configurable），允许通过该方法重新定义。
Object.defineProperty(sum, "name", {
  value: "bik",
});

excCalc(sum);

export {};
// 开发中如何选择:
// 1.如果只是描述函数类型本身(函数可以被调用), 使用函数类型表达式(Function Type Expressions)
// 2.如果在描述函数作为对象可以被调用, 同时也有其他属性时, 使用函数调用签名(Call Signatures)
