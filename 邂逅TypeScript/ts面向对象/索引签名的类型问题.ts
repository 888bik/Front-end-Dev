interface IIndexType {
  // [index: number]: string;
  // [index: string]: any;
  [index: string]: string;
}

//索引签名: [index: string]: any;没有报错
//索引签名的索引要求必须是字符串或者数字
// const names: IIndexType = ["bik", "zsd", "zkd"];
// console.log(names[0]); //会转成name["0"]
// console.log(names["0"]);

// 索引签名:[index: string]: string报错
//ts会进行严格字面量检测:在第一次创建数组的时候,会把["bik","zsd","zkd"]当做数组实例,可是数组实例还有像forEach,map,filter这些函数,所以不一定返回的是字符串
//如果能把里面返回的所有类型列举出来也行,但是这样太麻烦了,所以把返回值定义为any也行
// const names: IIndexType = ["bik", "zsd", "zkd"];

//把第一次实例化的数组赋值给其他变量也可以解决这种情况
const names = ["bik", "zsd", "zkd"];
const p = names;
console.log(p[0]);
export {};
