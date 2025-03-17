const fs = require("fs");

//创建一个读取流
const readStream = fs.createReadStream("./abc.txt", {
  highWaterMark: 3,
});

readStream.on("data", (data) => {
  console.log(data.toString());
});

//监听打开文件
readStream.on("open", () => {
  console.log("文件被打开了");
});

//监听关闭文件
readStream.on("close", () => {
  console.log("文件被关闭了");
});

readStream.on("end", () => {
  console.log("文件要读取完了");
});
