const koa = require("koa");

const app = new koa();

app.use((ctx, next) => {
  console.log(ctx.request); //请求对象:Koa封装的请求对象
  console.log(ctx.req); // 请求对象:Node封装的请求对象

  // console.log(ctx.response); //响应对象:Koa封装的响应对象
  // console.log(ctx.res); //响应对象:Node封装的响应对象

  // console.log(ctx.query);
  // console.log(ctx.params);
});

app.listen(8000, () => {
  console.log("服务器开启成功");
});
