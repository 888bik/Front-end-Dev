const express = require("express");
const axios = require("axios");

//总结:在这段代码中,第一个中间件的await next()实际上不会等待第三个中间件的异步请求（axios.get）完成，
//直接执行res.end(req.msg)导致响应提前终结。
// 此时第三个中间件可能尚未完成对req.msg的修改，最终返回结果为aaabbb
const app = express();

app.get("/", async (req, res, next) => {
  console.log("middleware exec 01");
  req.msg = "aaa";
  await next();
  // res.end(req.msg);//返回给客户端的结果为aaabbb
});

app.get("/", async (req, res, next) => {
  console.log("middleware exec 02");
  req.msg += "bbb";
  await next();
});
app.get("/", async (req, res, next) => {
  console.log("middleware exec 03");
  const resData = await axios.get("http://123.207.32.32:8000/home/multidata");
  req.msg += resData.data.data.banner.list[0].title;
  //只能在这里返回结果
  res.json(req.msg);
});
app.listen(8000, () => {
  console.log("服务器开启成功");
});
