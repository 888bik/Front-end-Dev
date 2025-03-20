const express = require("express");
const multer = require("multer");

const app = express();

const formdata = multer();

app.post("/login", formdata.any(), (req, res, next) => {
  console.log(req.body);
  res.end("登录成功");
});

app.listen(6000, () => {
  console.log("服务器开启成功");
});
