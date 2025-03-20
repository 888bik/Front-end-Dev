const express = require("express");

const app = express();

app.get(
  "/login",
  (req, res, next) => {
    console.log("middleware exec 01");
    next();
  },
  (req, res, next) => {
    console.log("middleware exec 02");
    next();
  },
  (req, res, next) => {
    console.log("middleware exec 03");
  }
);
app.listen(6000, () => {
  console.log("服务器开启成功");
});
