type toArray<T> = T[];

//newType此时的类型是(string | number)[],而我们预期的是string[] | number[]
type newType = toArray<string | number>;

export {};
