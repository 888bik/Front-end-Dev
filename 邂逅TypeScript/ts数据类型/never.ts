// never表示永远不会发生值的类型
function loopFn(): never {
  while (true) {
    console.log("111");
  }
}
loopFn();
