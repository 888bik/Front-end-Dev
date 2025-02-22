//Record作用:用于构造一个对象类型,它所有的key键都是keys类型,它所有的value值都是Type类型

interface IPerson {
  name: string;
  age: number;
}
type t = "上海" | "北京" | "深圳" | "广州";

type MyRecord<K extends keyof any, T> = {
  [key in K]: T;
};
// newType:{上海:IPerson,北京:IPerson....}
// type newType = Record<t, IPerson>;
type newType = MyRecord<t, IPerson>;
export {};
