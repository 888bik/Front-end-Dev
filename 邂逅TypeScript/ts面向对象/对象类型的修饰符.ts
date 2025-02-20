interface IPerson {
  //可选属性
  name?: string;
  //只读属性
  readonly age: number;
}
const p: IPerson = {
  age: 20,
};
export {};
