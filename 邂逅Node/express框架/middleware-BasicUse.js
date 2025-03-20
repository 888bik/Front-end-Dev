const express = require("express");

const app = express();

//给express创建的app传入一个回调函数
//传入的这个回调函数就称之为中间件
app.post("/login", (req, res, next) => {
  console.log("first middleware exec");

  //在中间件中修改req/res对象
  req.username = "zsd"; //给req对象添加一个username属性
  // console.log(req.username);
  //可以在中间件中结束响应周期
  res.json({ message: "登录成功", code: 0 });

  //执行下一个中间件
  next();
});

app.use((req, res, next) => {
  console.log("second middleware exec");
});

app.listen(6000, () => {
  console.log("success launch");
});
