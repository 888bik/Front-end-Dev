//函数的第一个参数我们可以根据该函数之后被调用的情况,用于声明this的类型
//在后续调用函数传入参数时,从第二个参数开始传递的,this参数会在编译后被擦除
function foo(this: { name: string }, age: number) {
  console.log(this);
  console.log(age);
}
foo.call({ name: "bik" }, 20);
export {};
