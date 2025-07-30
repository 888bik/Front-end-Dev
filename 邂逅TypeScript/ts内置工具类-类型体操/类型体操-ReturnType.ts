type CalcFn = (num1: number, num2: number) => number;

//首先类型是函数才有返回值,所以要限定泛型为函数类型
type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never;

type ReturnType = MyReturnType<CalcFn>;

// type o = MyReturnType<"hello">;

export {};
