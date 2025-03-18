const http = require("http");
const url = require("url");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  const urlString = req.url;
  const urlInfo = url.parse(urlString);

  const queryString = urlInfo.query;
  const queryInfo = qs.parse(queryString);
  console.log(queryInfo.username, queryInfo.password);
  res.end("hello bik");
});

server.listen(6000, () => {
  console.log("服务器开启成功");
});
