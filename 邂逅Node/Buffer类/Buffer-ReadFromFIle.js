const fs = require("fs");

//如果指定编码,那么打印data的时候会自动将二进制转为对应的内容
fs.readFile("abc.txt", { encoding: "utf-8" }, (err, data) => {
  console.log(data);
});

fs.readFile("abc.txt", (err, data) => {
  console.log(data.toString());
});

fs.readFile("abc.txt", (err, data) => {
  data[0] = 0x6d;
  console.log(data.toString());
});
