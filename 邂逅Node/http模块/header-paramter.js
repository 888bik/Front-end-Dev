const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.headers);
  //  'content-type': 'application/json',
  // 'user-agent': 'PostmanRuntime/7.43.2',
  // accept: '*/*',
  // 'cache-control': 'no-cache',
  // 'postman-token': 'a70f2be4-3e8e-4e5e-9fe9-03908ad447d9',
  // host: '127.0.0.1:6000',
  // 'accept-encoding': 'gzip, deflate, br',
  // connection: 'keep-alive',
  // 'content-length': '51'

  res.end("hello");
});
server.listen(6000, () => {
  console.log("服务器开启成功");
});
