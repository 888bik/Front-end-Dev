interface IPerson {
  name?: string;
  age?: number;
  height: number;
  address?: string;
}
// type newType = Readonly<IPerson>
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
type newType = MyReadonly<IPerson>;
export {};
