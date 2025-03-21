const koa = require("koa");

const app = new koa();

app.use((ctx, next) => {
  console.log("匹配到第一个中间件");
  ctx.body = "hello";
});

app.listen(6000, () => {
  console.log("服务器开启成功");
});
