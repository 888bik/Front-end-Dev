const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  port: 3306,
  database: "vueshop",
});

const statement = "select * from products";

//这里的query不是指DQL,而是指structure query language中的query
connection.query(statement, (err, values, fields) => {
  if (err) {
    console.log("查询失败:", err);
    return;
  }
  //查看结果
  console.log(values);
});
