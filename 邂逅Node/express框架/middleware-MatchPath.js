const express = require("express");

const app = express();

//只会匹配login路径的请求
app.use("/login", (req, res, next) => {
  console.log("登录成功,欢迎回来");
  console.log("middleware exec 01");
});
//所有路径都可以匹配到
app.use((req, res, next) => {
  console.log("middleware exec 02");
});
app.listen(6000, () => {
  console.log("服务器开启成功");
});
