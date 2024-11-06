var obj = {
  name: "bik",
  age: 18,
  height: 1.88,
}
var address = "清远"
Object.defineProperty(obj, "address", {
  configurable: true,
  enumerable: true,
  get: () => {
    console.log("获取值");
    return address;
  },
  set: (value) => {
    console.log("设置值:"+value);
    
    address =  value;
  },
})
console.log(obj.address);//会调用get方法
obj.address = "汕头";//会调用set方法
console.log(obj.address);

