function printMessage(message?: string) {
  //这里会报错,因为ts认为message可能为空的
  // console.log(message.length);
  //但是如果能确定是有传入参数的,那么这时候可以使用非空断言告诉ts某个标识符肯定是有值的,让它跳过在编译阶段对某个变量的检测
  console.log(message!.length);
}
printMessage("hello");
