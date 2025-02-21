//当在泛型中使用条件类型的时候,如果传入一个联合类型,就会变成分发的
//当传入string | number时,会遍历联合类型中的每一个成员
// 相当于T = string[],T = number[]
type toArray<T> = T extends any ? T[] : never;

//string[] |number[]
type newType = toArray<string | number>;
