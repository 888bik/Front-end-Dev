var obj = {
  name: "bik",
  age: 18,
  height: 1.88,
}
Object.defineProperty(obj, "age", {
  writable: false,
  enumerable: false,//不能被枚举
  configurable: false,
  value:16//修改值
})
//可以使用下面方式添加对象属性,但writable.configurable,enumerable默认都是false
Object.defineProperty(obj, "address", {
  value:"清远"
})
obj.address = "汕头"
obj.age = 20;//默认t况是可修改的,将obj中的age的writable修改为false之后就不可以修改了
console.log(obj.age);
console.log(obj.address);
