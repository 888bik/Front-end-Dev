const net = require('net');
const readline = require('readline');

const client = net.createConnection({ port: 12345 }, () => {
    console.log('连接到聊天室');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('请输入你的用户名: ', (username) => {
        client.write(username);
        rl.on('line', (line) => {
            client.write(line);
        });
    });
});

client.on('data', (data) => {
    console.log(data.toString());
});

client.on('end', () => {
    console.log('聊天室关闭');
});
