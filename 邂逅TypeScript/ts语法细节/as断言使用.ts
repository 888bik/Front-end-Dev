//ts有时候无法获取具体的类型信息,这个时候可以使用类型断言
//正常情况下ts只知道该函数会返回HTMLElement,但是不知道它具体的类型
const imgEl = document.querySelector(".img") as HTMLImageElement;

//类型断言的规则:断言只能断言成更加具体的类型,或者不太具体(any/unknown)类型
const age: number = 20;
// 错误的做法:
// const age2 = age as string

//以下代码也是不正确的
const age3 = age as any;
const age4 = age3 as string;
console.log(age4.split(" "));
