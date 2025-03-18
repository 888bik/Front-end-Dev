const http = require("http");

const server = http.createServer((request, response) => {
  console.log("服务器被访问");
  console.log(request.url);
  console.log(request.method);
  console.log(request.headers);
  response.end("hello node");
});

server.listen(6000, () => {
  console.log("服务器开启成功");
});
