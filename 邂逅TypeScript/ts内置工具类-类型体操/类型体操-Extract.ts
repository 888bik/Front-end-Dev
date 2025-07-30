//Extract作用:用于构造一个类型,它是从Type类型里面提取了所有可以赋值给Union的类型
//总之就是跟Omit相反
type IKun = "dance" | "sing" | "rap";

type MyExtract<T, E> = T extends E ? T : never;
// type newType = Extract<IKun, "dance"| "rap">;
type newType = MyExtract<IKun, "dance" | "rap">;
export {};
