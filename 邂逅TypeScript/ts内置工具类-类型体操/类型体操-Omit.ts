//Omit作用:用于构造一个类型,它是从Type类型里面过滤了一些属性Keys
interface IPerson {
  name: string;
  age: number;
  address: string;
  height: number;
}

type MyOmit<T, K extends keyof T> = {
  //实现一:
  // [P in keyof T as P extends K?never:P]:T[P]
  //实现二:
  //注意Exclude第一个参数只能传入联合类型,像T这种对象不能直接传入,需要使用keyof遍历得到其中的联合类型
  [P in Exclude<keyof T, K>]: T[P];
};
// type newType = Omit<IPerson, "name"|"age">;
type newType = MyOmit<IPerson, "name" | "age">;
export {};
