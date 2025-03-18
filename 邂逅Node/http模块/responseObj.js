const http = require("http");

const server = http.createServer((rep, res) => {
  // res:response是一个writeable可写流
  // res.write("hello world");

  //设置响应状态码
  //注意得在写入数据之前设置headers
  //方式一
  res.statusCode = 400;
  //方式二
  // res.writeHead(401);

  //也可以设置header信息:数据的类型以及数据的编码格式
  res.setHeader("Content-Type", "text/plain;charset=utf8");
  res.writeHead(200, {
    "content-type": "application/json;charset=utf8",
  });

  res.end("本次写入结束");
});

server.listen(6000, () => {
  console.log("服务器开启成功");
});
