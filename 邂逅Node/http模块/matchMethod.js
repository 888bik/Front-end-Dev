const http = require("http");

const server = http.createServer((req, res) => {
  const method = req.method;
  if (method === "GET") {
    console.log("home data");
    res.end("home data");
  } else if (method === "POST") {
    console.log("登录成功");
    res.end("login success");
  } else if (method === "DELETE") {
    console.log("删除用户");
    res.end("delete user");
  }
});

server.listen(6000, () => {
  console.log("服务器开启成功");
});
