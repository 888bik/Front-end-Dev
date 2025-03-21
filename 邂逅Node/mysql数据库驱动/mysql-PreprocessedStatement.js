const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  port: 3306,
  database: "vueshop",
});

const statement =
  "select * from products where stock_quantity > ? and price > ?";
connection.execute(statement, [10, 100], (err, values) => {
  console.log(values);
});
