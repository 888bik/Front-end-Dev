// require 是 Node.js 环境中的'全局'变量，用来导入模块

const { error } = require('console');
const fs = require('fs');
// fs.writeFile('./座右铭.txt', '三人行，必有我师焉 test', err => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("写入成功");

// });

// fs.appendFile('座右铭.txt', " append", error => {
//     if (error) {
//         console.log(error);
//     }
//     console.log('追加成功')

// })
let ws = fs.createWriteStream('观书有感.txt',);
ws.write('半亩方塘一鉴开');
ws.write('天光云影共徘徊');
ws.write('问渠那得清如许');
ws.write('为有源头活水来');
ws.end;