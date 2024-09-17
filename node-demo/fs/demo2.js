const fs = require('fs');
/**
 * 文件读取
 */
fs.readFile('after rename test', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data);
});
