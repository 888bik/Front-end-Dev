const mysql2 = require("mysql2");

//创建一个连接池
const connectionPool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  port: 3306,
  database: "vueshop",
  connectionLimit: 5, //限制最多可以存在多少个连接
});

const statement =
  "select * from products where stock_quantity > ? and price > ?";
connectionPool.execute(statement, [10, 100], (err, values) => {
  console.log(values);
});
