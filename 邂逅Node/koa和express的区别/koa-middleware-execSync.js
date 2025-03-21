const koa = require("koa");

const app = new koa();

//总结:每个中间件调用next()时会暂停当前中间件的执行，将控制权交给下一个中间件

app.use((context, next) => {
  console.log("middleware exec 01");
  context.msg = "aaa";
  next();
  context.body = context.msg;
});
app.use((context, next) => {
  console.log("middleware exec 02");
  context.msg += "bbb";
  next();
});
app.use((context, next) => {
  console.log("middleware exec 03");
  context.msg += "ccc";
});

app.listen(8000, () => {
  console.log("服务器开启成功");
});
