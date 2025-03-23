const mysql2 = require("mysql2");

const connectionPool = mysql2.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "coderhub",
  connectionLimit: 5,
});

connectionPool.getConnection((err, connection) => {
  if (err) {
    console.log("获取连接失败:" + err);
    return;
  }
  connection.connect((err) => {
    if (err) {
      console.log("建立连接失败:" + err);
    }
  });
});

// 获取连接池中连接对象(promise)
const connection = connectionPool.promise();

module.exports = connection;
