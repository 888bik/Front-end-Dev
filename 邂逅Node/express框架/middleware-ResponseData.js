const express = require("express");

const app = express();

app.post("/login", (req, res, next) => {
  //较少使用
  // res.end("登录成功")
  res.json({
    code: 1001,
    message: "登录成功",
  });
});

app.listen(6000, () => {
  console.log("服务器开启成功");
});
