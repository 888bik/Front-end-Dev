//Required:用于构造一个Type下面的所有属性全都设置为必填的类型，这个工具类型跟 Partial 相反。
interface IPerson {
  name?: string;
  age?: number;
  height: number;
  address?: string;
}
// type newType = Required<IPerson>
type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};
type newType = MyRequired<IPerson>;
export {};
