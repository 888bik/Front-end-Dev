type IdType = string | number;

const res = 2 > 3 ? true : false;

type ResType1 = boolean extends IdType ? true : false;
type ResType2 = string extends IdType ? true : false;
type ResType3 = boolean extends any ? true : false;

//例子:函数重载
// function sum(num1: string, num2: string): string;
// function sum(num1: number, num2: number): number;
//错误做法
// function sum(num1: string | number, num2: string | number) {}


//做法二:
function sum<T extends number | string>(
  num1: T,
  num2: T
): T extends number ? number : string;
function sum(num1:any, num2:any) {
  return num1+num2
}
sum(123,123)
sum("hel","abc")
//做法一:
// function sum(num1: any, num2: any) {
//   return num1 + num2;
// }
