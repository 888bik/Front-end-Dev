// require 是 Node.js 环境中的'全局'变量，用来导入模块

const { error, log } = require('console');
const fs = require('fs');
/**
 * 文件写入
 */
//异步写入
// fs.writeFile('./座右铭.txt', '三人行，必有我师焉 test', err => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("写入成功");

// });
//同步写入
// fs.writeFileSync('观书有感.txt', '同步写入测试', err => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('写入成功');
// })
/**
 * 文件追加
 */
// fs.appendFile('座右铭.txt', " append", error => {
//     if (error) {
//         console.log(error);
//     }
//     console.log('追加成功')

// })
// fs.appendFileSync  同步追加
//流式写入，连接之后持续输出,程序打开一个文件是需要消耗资源的，流式写入可以减少打开关闭文件的次数.
// let ws = fs.createWriteStream('观书有感.txt',);
// ws.write('半亩方塘一鉴开');
// ws.write('天光云影共徘徊');
// ws.write('问渠那得清如许');
// ws.write('为有源头活水来');
// ws.end;

/**
 * 文件读取
 */
// 异步读取
// fs.readFile("观书有感.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// })


// fs.readFile('观书有感.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);

// })

//流式读取

// 创建流对象
// let rs = fs.createReadStream('观书有感.txt')
// // 每次取出64k数据后执行一次data回调
// rs.on('data', data => {
//     console.log(data);
//     console.log(data.length);
// });
// // 读取完毕之后，执行end回调
// rs.on('end', () => {

//     console.log('读取完成');
// })
/**
 * 文件移动和重命名
 */
// fs.rename('观书有感.txt', '观书有感rename test', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("移动完成")
// })
// fs.unlink('观书有感rename test', err => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("删除成功")
// });
// fs.mkdir("rename", err => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('创建文件夹cg')
// })
// fs.writeFile('rename', "测试", err => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('创建成功');
// });
fs.rename('rename', 'after rename test', err => {
    if (err) {
        console.log(err);
    }
    console.log('文件重命名成功');
});