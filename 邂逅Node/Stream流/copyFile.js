const fs = require("fs");

//创建可读流和可写流
const readStream = fs.createReadStream("./abc.txt", { encoding: "utf-8" });
const writeStream = fs.createWriteStream("./abc_copy.txt");

readStream.on("data", (data) => {
  writeStream.write(data);
  // writeStream.end(data.toString());
});
//当可读流读取完毕之后关闭可写流
readStream.on("end", () => {
  writeStream.close();
});

//在可读流和可写流之间建议一个管道
const readStream2 = fs.createReadStream("./abc.txt");
const writeStream2 = fs.createWriteStream("abc_copy_pipe.txt");
readStream2.pipe(writeStream2);
