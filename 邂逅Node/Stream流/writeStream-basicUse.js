const fs = require("fs");

//创建一个可写流
const writeStream = fs.createWriteStream("./abc.txt", {
  // flags: "a",
  //当要指定从哪个字节读取时,需要将flags设置为r+
  flags: "r+",
  start: 5,
});

writeStream.on("open", (fd) => {
  console.log("文件被打开了", fd);
});

writeStream.write("hello bik");
writeStream.write("hello node");

writeStream.on("finish", () => {
  console.log("文件写入完成");
});

//写入完成时,需要手动调用close方法进行关闭操作
// writeStream.close();

//end方法会将最后的内容写入到文件中,并关闭文件
writeStream.end("last append");

writeStream.on("close", () => {
  console.log("文件关闭");
});
