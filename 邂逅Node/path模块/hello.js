const path = require("path");

// 将多个路径拼接一起, 最终一定返回一个绝对路径
// console.log(path.resolve("abc/cde", "../hello/world", "./bik.txt"))
// console.log(path.resolve());
console.log(__dirname);
console.log(path.resolve(__dirname,"./dist"));