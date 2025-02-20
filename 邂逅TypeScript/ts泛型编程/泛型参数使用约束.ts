//在泛型约束中使用类型参数,声明一个类型参数,这个类型参数被其他类型参数约束
//比如获取一个对象给点属性名的值:需要确保不会获取obj不存在的属性,所以要在两个类型之间建立一个约束
const info = {
  name: "bik",
  age: 20,
};
//这种写法相当于K extends name | age(也就是说K必须满足T中的属性之一)
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
console.log(getProperty(info, "name"));
