const http = require("http");

//创建一个http对应的服务器
const server = http.createServer((request, response) => {
  //request对象包含本次客户端请求的所有信息:url,method,headers,data,request本质是一个readable可读流
  //response对象用于给客户端返回结果,response本质是一个可写流
  response.end("hello http");
});

//开启对应的服务器,并告知需要监听的端口
server.listen(6000, () => {
  console.log("服务器开启成功");
});
