//原先写法
// const names: string[] = ["zsd", "zkz", "zxb"];
// console.log(names[2]);//正常
// console.log(names[666]);//数组访问越界,但是没有提示

//用元组
const names: [string, string, string] = ["zsd", "zkz", "zxb"];
console.log(names[2]);
// console.log(names[666]);//报错了,但是有提示

// 除了同类型的元素以外，元组内部也可以声明多个与其位置强绑定的
const message1: [number, boolean, string] = [999, false, "hello tuple"];

// 同时元组也支持了在某一个位置上的可选成员
//需要注意的是,必选参数不能在可选的参数的后面
// const message2:[number?,boolean?,string] = [,,"hello"]//错误写法
// const message2: [number, boolean, string?] = [666, false];

//在函数中使用元组类型是最多的的(函数的返回值)
function useState(initialState: number): [number, (newValue: number) => void] {
  let stateValue = initialState;
  function setValue(newValue: number) {
    stateValue = newValue;
  }
  return [stateValue, setValue];
}

export {};
