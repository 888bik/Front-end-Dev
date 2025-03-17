const fs = require("fs");
//一次性读取的缺点:
//1.没办法精确控控制从哪里读取,从哪里结束
//2.也没办法控制在某一个位置停止读取,恢复读取
//3.文件非常大的时候,没办法一次性读取完,需要分多次读取

const readStream = fs.createReadStream("./abc.txt", {
  start: 3,
  end: 7,
  highWaterMark: 3, //每次读取3个字节
});

readStream.on("data", (data) => {
  console.log(data.toString());
  readStream.pause(); //暂停读取
  setTimeout(() => {
    readStream.resume(); //恢复读取
  }, 2000);
});
