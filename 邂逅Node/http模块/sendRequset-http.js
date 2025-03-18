const http = require("http");

//使用http模块发送get请求
http.get("http://127.0.0.1:6000", (res) => {
  //从可读流中获取数据
  res.on("data", (data) => {
    const dataString = data.toString();
    console.log(dataString);
  });
});

//使用http发送post请求
http.request(
  {
    method: "POST",
    hostname: "localhost",
    port: 6000,
  },
  (res) => {
    res.on("data", (data) => {
      console.log(data.toString());
    });
  }
);
