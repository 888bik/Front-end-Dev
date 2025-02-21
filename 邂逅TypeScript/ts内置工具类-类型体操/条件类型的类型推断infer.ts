type CalcType = (num1: number, num2: number) => number;
//内置工具ReturnType:获取返回值类型
// type CalcReturn = ReturnType<CalcType>;
//条件类型提供了infer关键词,可以从正在比较的类型中推断类型,然后在true分支里引用该推断结果
//首先接收的参数要求是函数类型,然后用infer判断T的返回值类型是否符合类型约束中的返回值类型,如果符合则返回判断出的值,否则返回never
//...arg:any[]表示接收任意数量,类型的参数
type MyReturnType<T extends (...arg: any[]) => any> = T extends (
  ...arg: any[]
) => infer R
  ? R
  : never;
type CalcReturn = MyReturnType<CalcType>;

//获取参数类型
// type CalcParameter = Parameters<CalcType>

//infer p的作用：它会将函数的参数类型提取为一个元组类型
type MyParameters<T extends (...arg: any[]) => any> = T extends (
  ...arg: infer P
) => any
  ? P
  : never;

type CalcParameter = MyParameters<CalcType>;

export {};
