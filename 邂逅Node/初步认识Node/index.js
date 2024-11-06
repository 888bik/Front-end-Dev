//导入bar.js文件
const bar  = require("./bar.js")
// console.log(bar.name);
// console.log(bar.age);
// console.log(bar.address);
console.log(module.exports === exports);