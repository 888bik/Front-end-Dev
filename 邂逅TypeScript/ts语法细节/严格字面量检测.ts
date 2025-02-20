//奇怪的现象一
interface IPerson {
  name: string;
  age: number;
}
const obj = {
  name: "bik",
  age: 20,

  //多了一个属性
  height: 1.88,
};

//将obj赋值给p,但是p没有报错
const p: IPerson = obj;

//奇怪的现象二
function printPerson(p: IPerson) {}
//会报错
// printPerson({ name: "bik", age: 20 ,height:1.88});
const stu = { name: "bik", age: 20, height: 1.88 };
//但是这里就不会报错了
printPerson(stu);

//解释:
//这里第一次创建的字面量,称之为fresh(新鲜的)
//对于新鲜的字面量,会进行严格的类型检测,必须完全满足类型要求,不能多也不能少
//而一旦不新鲜了(即一旦在别的地方用了,或者当类型断言或对象字面量的类型扩大时,新鲜度会消失)
export {};
