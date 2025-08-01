interface IPerson {
  name: string;
  age: number;
  address: string;
}
//不能直观看到name | age | address
type newType1 = keyof IPerson;

type DirectKeys<T> = T extends any ? T : never;

type newType2 = DirectKeys<keyof IPerson>;

export {};
