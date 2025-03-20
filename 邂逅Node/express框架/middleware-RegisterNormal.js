const express = require("express");

const app = express();

//当express接受到客户端发送的网络请求时,会在所有的中间件进行匹配
//当匹配到第一个符合要求的中间件时,那么就会执行这个中间件
//后续的符合要求的中间件是否会执行,取决于上一个中间件有没有执行next

//通过use方法注册的中间件是普通中间件,特点是无论是什么请求方式都可以匹配上
app.use((req, res, next) => {
  console.log("normal middleware 01");
  //调用next()会执行第二个middleware
  next();
});
app.use((req, res, next) => {
  console.log("normal middleware 02");
  next();
});
app.use((req, res, next) => {
  console.log("normal middleware 03");
});

app.listen(6000, () => {
  console.log("服务器开启成功");
});
