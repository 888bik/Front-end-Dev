//注意这里Test1为never，原因是string | number |boolean被当做一个整体进行判断
type Test1 = string | number | boolean extends string | number ? string : never;

type InferType<T> = T extends string | number ? T : never;

//而这里为string | number,原因是这里是迭代进行判断，即string extend string | number ? string :never,number extend....
type Test2 = InferType<string | number | boolean>;
