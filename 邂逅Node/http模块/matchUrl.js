const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  //根据不同的url处理不同的逻辑
  if (url === "/login") {
    console.log("登录成功");
  } else if (url === "/register") {
    console.log("注册成功");
  } else {
    console.log("服务器繁忙,请稍后重试");
  }
  res.end("hello bik");
});

server.listen(6000, () => {
  console.log("服务器开启成功");
});
