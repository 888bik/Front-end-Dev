//创建8个字节空间大小的Buffer内存空间
const buf = Buffer.alloc(8);

//手动对每个字节进行操作
buf[1] = 100;
buf[2] = 0x66;
buf[3] = "s".charCodeAt();

//手动对每个字节进行访问
console.log(buf[0]);
console.log(buf[1]);
console.log(buf[2]);
console.log(buf[3]);
