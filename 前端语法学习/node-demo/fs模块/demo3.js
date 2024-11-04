const { error } = require('console');
const fs = require('fs');
//读取文件夹中的内容
// fs.readdir('fs', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// });
//查看资源状态
fs.stat('after rename test', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});
