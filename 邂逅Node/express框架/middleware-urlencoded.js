const express = require("express");

const app = express();

//中间件:内部会解析客户端传递过来的json数据并调用next
// app.use(express.json());

//内部会解析传递过来的urlencoded,默认使用的node内置querystring模块,将extended设置为true时,会使用qs第三方库
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res, next) => {
  console.log(req.body);
});

app.listen(6000, () => {
  console.log("服务器开启成功");
});
