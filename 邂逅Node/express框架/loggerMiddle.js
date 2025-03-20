const express = require("express");
const fs = require("fs");
const morgan = require("morgan");

const app = express();

const writeSteam = fs.createWriteStream("./logs/access.log");
app.use(morgan("combined", { stream: writeSteam }));

app.post("/login", (req, res, next) => {
  res.end("登录成功");
});

app.listen(6000, () => {
  console.log("服务器开启成功");
});
