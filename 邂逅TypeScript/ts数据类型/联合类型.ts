//联合类型是由两个或者多个类型组成的类型,表示可以是这些类型中的任何一个值
function print(id: number | string) {
  console.log(id);
  //需要注意的是,如果想获取id的长度,但是id此时可能number类型,也可能是string类型,所以不能直接对变量进行操作,必须进行类型缩小
  if (id === "string") {
    console.log(id.length);
  }
}
print(123);
print("abc");
export {};
