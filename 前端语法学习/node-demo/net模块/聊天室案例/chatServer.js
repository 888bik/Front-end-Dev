const net = require('net');

const clients = {};

const server = net.createServer((socket) => {
    let username;

    socket.on('data', (data) => {
        if (!username) {
            username = data.toString().trim();
            clients[username] = socket;
            broadcast(`${username} 进入聊天室\n`);
        } else {
            broadcast(`${username}: ${data}`);
        }
    });

    socket.on('end', () => {
        delete clients[username];
        broadcast(`${username} 离开聊天室\n`);
    });
});

function broadcast(message) {
    for (const client of Object.values(clients)) {
        client.write(message);
    }
}

server.listen(12345, () => {
    console.log('聊天室服务器启动，等待连接...');
});