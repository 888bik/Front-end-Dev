//创建Buffer方式一
const buf1 = new Buffer("hello");
console.log(buf1);

//方式二
const buf2 = Buffer.from("world");
console.log(buf2);

const buf3 = Buffer.from("你好");
console.log(buf3);
console.log(buf3.toString());

//指定编码
const buf4 = Buffer.from("世界", "utf-16le");
console.log(buf4);
//解码需要对应的编码格式
console.log(buf4.toString("utf-16le"));
