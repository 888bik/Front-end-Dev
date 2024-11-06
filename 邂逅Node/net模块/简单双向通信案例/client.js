const net = require('net');
const readline = require('readline');

const client = net.createConnection({ port: 12345 }, () => {
    console.log('连接到服务器');
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    client.write(line);
});

client.on('data', (data) => {
    console.log(`服务器回复: ${data}`);
});

client.on('end', () => {
    console.log('服务器断开连接');
});
