//Pick作用:用于构造一个类型,它是从Type类型里面挑选的一些属性keys
interface IPerson {
  name: string;
  age: number;
  address: string;
  height: number;
}
//K必须来自于IPerson类型中
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};
// newType= "name"|"address"
// type newType = Pick<IPerson, "name" | "address">;
type newType = MyPick<IPerson, "name" | "age">;

export {};
