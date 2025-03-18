const http = require("http");

const server = http.createServer((req, res) => {
  req.on("data", (data) => {
    //data是二进制数据
    const dataString = data;
    //将json数据解析成对象
    const Info = JSON.parse(dataString);
    if (Info.username !== "bik" && Info.password !== "12345") {
      res.end("账号或密码错误,请重新检测");
    } else {
      res.end("登录成功,正在跳转");
    }
  });
});

server.listen(6000, () => {
  console.log("服务器开启成功");
});
