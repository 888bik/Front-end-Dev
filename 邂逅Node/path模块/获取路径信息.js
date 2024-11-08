const path = require("path");

const fileName = path.dirname("./获取路径信息.js");//.
const dirName = path.basename("./获取路径信息.js")//获取路径信息
const extName = path.extname("./获取路径信息.js")//.js

console.log(fileName,dirName,extName);
