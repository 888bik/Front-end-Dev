//NonNullable作用:用于构造一个类型,这个类型从Type中排除了所有null,undefined类型
type IKun = string | number | boolean | null | undefined;
// type newType = NonNullable<IKun>
type MyNonNullable<T> = T extends null | undefined ? never : T;
type newType = MyNonNullable<IKun>;
export {};
