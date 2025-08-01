interface IPerson {
  name: string;
  age: number;
  height: number;
}

type AddAttrToObj<T, K extends string, V> = {
  [P in keyof T | K]: P extends keyof T ? T[P] : V;
};
type newType = AddAttrToObj<IPerson, "address", string>;
export {};
