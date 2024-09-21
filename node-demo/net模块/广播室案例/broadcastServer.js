const net = require('net');

const clients = [];

const server = net.createServer((socket) => {
    clients.push(socket);
    console.log('新客户端连接');

    socket.on('data', (data) => {
        console.log(`广播: ${data}`);
        clients.forEach((client) => {
            if (client !== socket) {
                client.write(data);
            }
        });
    });

    socket.on('end', () => {
        console.log('客户端断开连接');
        clients.splice(clients.indexOf(socket), 1);
    });
});

server.listen(12345, () => {
    console.log('服务器启动，等待连接...');
});
