interface IIndexType {
  //两个索引签名的写法
  [index: number]: number;
  [key: string]: number | string;
}
// 要求一:数字类型索引的类型, 必须是字符串类型索引的类型的 子类型
//原因是:names[0]会转成names["0"],我们通过number类型的索引去获取的是number或者string的值
//但是names["0"]却只能拿到string的值,这是矛盾的
//错误:
// [index: number]: number | string;
// [key: string]: string;

// 要求二: 如果索引签名中有定义其他属性, 其他属性返回的类型, 必须符合string类型返回的属性
// [key: string]: string;
// aaa: string;
// bbb: boolean;

export {};
