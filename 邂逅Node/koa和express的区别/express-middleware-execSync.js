const express = require("express");

const app = express();
// 总结:每个中间件中调用next()时，Express会立即阻塞当前中间件的后续代码，转而执行下一个中间件
//express同步执行的过程是符合洋葱模型的(但不能说明express是符合洋葱模型的,因为express异步代码执行顺序不可预测)

app.get("/", (req, res, next) => {
  console.log("middleware exec 01");
  req.msg = "aaa";
  next(); //执行到这一行代码的时候,会先执行下一个匹配到的中间件
  res.json(req.msg); //最后返回客户端接受的数据是aaabbbccc
});
app.get("/", (req, res, next) => {
  console.log("middleware exec 02");
  req.msg += "bbb"; //此时msg=aaabbb
  next(); //执行下一个匹配到的中间件
});
app.get("/", (req, res, next) => {
  console.log("middleware exec 03");
  req.msg += "ccc"; //此时msg=aaabbbccc,然后开始返回上一个中间件
});

app.listen(8000, () => {
  console.log("服务器开启成功");
});
