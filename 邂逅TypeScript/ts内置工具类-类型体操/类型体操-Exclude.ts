//Exclude<UnionType,ExcludedMembers>作用:用于构造一个类型,它是从联合类型里面排除了所有可以赋给ExcludeMember的类型
type IKun = "dance" | "sing" | "rap";

type MyExclude<T, E> = T extends E ? never : T;
// i = "sing"|"rap"
type i = MyExclude<IKun, "dance">;
