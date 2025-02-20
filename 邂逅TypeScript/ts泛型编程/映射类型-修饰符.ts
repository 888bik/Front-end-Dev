//在映射类型时,有两个额外的修饰符可以使用:一个是readonly,用于设置属性只读,一个是?,用于设置属性可选
//另外可以通过前缀-或者+删除或者添加这些修饰符,如果没有写前缀,默认使用+
interface IPerson {
  readonly name: string;
  age: number;
  height: number;
  address: string;
}
type MapPerson<T> = {
  // readonly [Property in keyof T]?: T[Property];
  +readonly [Property in keyof T]?: T[Property];
};
// interface NewPerson =
type NewPerson = MapPerson<IPerson>;
const p: NewPerson = {
  // name: "bik",
  // age: 20,
  // height: 1.88,
  // address: "清远",
};

export {};
