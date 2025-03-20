const express = require("express");

//创建express服务器
const app = express();

//express封装了路由匹配,只有路径和方法匹配才能访问到,否则报错
app.post("/login", (req, res) => {
  res.end("登录成功");
});

app.get("/home", (req, res) => {
  res.end("home data");
});

//启动服务器
app.listen(6000, () => {
  console.log("服务器开启成功");
});
