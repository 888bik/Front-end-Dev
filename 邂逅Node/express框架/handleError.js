const express = require("express");

const app = express();

app.use(express.json());

app.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  if (username !== "bik" || password !== "1234") {
    next(-1001);
  } else {
    res.json("登录成功");
  }
});

app.use((errCode, req, res, next) => {
  const code = errCode;
  const errMsg = "未知的错误信息";
  switch (code) {
    case -1001:
      errMsg = "账号或密码错误,请重新尝试";
      break;
    case -1002:
      errMsg = "服务器繁忙,请稍后重试";
      break;
  }
  res.json({ errCode, errMsg });
});
app.listen(6000, () => {
  console.log("服务器开启成功");
});
