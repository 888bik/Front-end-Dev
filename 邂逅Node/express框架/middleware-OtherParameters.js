const express = require("express");

const app = express();

//解析querystring
app.get("/home/list", (req, res, next) => {
  const queryInfo = req.query;
  console.log(queryInfo.name);
  console.log(queryInfo.age);
  res.end("data list数据");
});

//解析params参数
app.post("/login/:id", (req, res, next) => {
  // const id = req.params.id
  res.end("登录成功");
});

app.listen(6000, () => {
  console.log("服务器开启成功");
});
