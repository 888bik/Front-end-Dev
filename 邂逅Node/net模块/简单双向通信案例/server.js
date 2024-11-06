const net = require('net');

const server = net.createServer((socket) => {
    console.log('客户端连接');

    socket.on('data', (data) => {
        console.log(`收到: ${data}`);
        socket.write(`回复: ${data}`);
    });
    socket.on('end', () => {
        console.log('客户端断开连接');
    });
});

server.listen(12345, () => {
    console.log('服务器启动，等待连接...');
});
