// 匿名参数与函数声明有一些不同:
// 当一个函数出现在ts可以确定该函数会被如何调用的地方时:该函数的参数会自动指定类型
const names = ["abc", "cba", "nba"];
names.forEach((element) => {
  console.log(element);
});
//我们并没有指定element的类型,但是element是一个string类型
// 这是因为ts会根据forEach函数的类型以及数组的类型推断出element的类型
//这个过程称为上下文类型,因为函数执行的上下文可以帮助确定参数和返回值的类型
