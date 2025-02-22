//Partial作用:用于构造一个Type下面的所有属性都设置为可选的类型
interface IPerson {
  name: string;
  age: number;
  height: number;
  address: string;
}
// interface MyPartial<T> {
//   //使用映射类型
//   [K in keyof T]:T[K]
// }
type MyPartial<T> = {
  //使用映射类型
  // keyof T会生成一个联合类型,里面包含类型T中所有公共属性名(键) "name" | "age" |"height"|"address"
  // in会遍历联合类型中的每一个成员
  [P in keyof T]?: T[P];
};

//newType中所有的属性都是可选的了
// type newType = Partial<IPerson>
type nweType = MyPartial<IPerson>;
// const p: newType = {};
export {};
