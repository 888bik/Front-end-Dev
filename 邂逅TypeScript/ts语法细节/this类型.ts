const obj = {
  name:"bik",
  age: 20,
  foo: function () {
    console.log(this);
    console.log(this.age);
  }
} 
// 在ts配置文件中将noImplicitThis设置为true后,ts会自动推导this的类型

//如果没有推导成功就会报错,需要我们自己指定this的类型
// function bar() {
//   console.log(this);
// }

