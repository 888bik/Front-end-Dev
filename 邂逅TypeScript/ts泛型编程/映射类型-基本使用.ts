//有时候一个类型需要基于另外一个类型,但又不想拷贝一份,这个时候可以考虑使用映射类型
//ts提供了映射类型:类似一个函数
interface IPerson {
  name: string;
  age: number;
}
// keyof T会生成一个联合类型,里面包含类型T中所有公共属性名(键) "name" | "age" |"height"|"address"
// in会遍历联合类型中的每一个成员
//keyof = "name"|"age"
type MapPerson<T> = {
  //相当于从IPerson中遍历出name:string创建一个类型
  [Property in keyof T]: T[Property];
};

//拷贝一份IPerson
type NewPerson = MapPerson<IPerson>;
export {};
