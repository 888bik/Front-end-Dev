//需求:定义一个函数,可以传入字符串或者数组,来获取长度
const arr = ["abc", "cba", "nba", "bik"];
const str = "bikzsdzkzzxb";
//实现一:使用联合类型
// function getLength(arg: Array<string> | string) {
//   return arg.length;
// }

//实现二:使用函数重载
function getLength(arg: string): number;
function getLength(arg: any[]): number;
function getLength(arg: any) {
  return arg.length;
}

const res1 = getLength(arr);
const res2 = getLength(str);
console.log(res1, res2);
