const koa = require("koa");
const axios = require("axios");
const app = new koa();

//总结:尽管第三个中间件包含异步 HTTP 请求（axios.get），Koa 依然保持中间件的 ​洋葱模型执行顺序
// 中间件01（前）→ 中间件02（前）→ 中间件03（异步请求）→ 中间件02（后）→ 中间件01（后）

app.use(async (context, next) => {
  console.log("middleware exec 01");
  context.msg = "aaa";
  await next();
  context.body = context.msg;
});
app.use(async (context, next) => {
  console.log("middleware exec 02");
  context.msg += "bbb";
  await next();
});
app.use(async (context, next) => {
  console.log("middleware exec 03");
  const res = await axios.get("http://123.207.32.32:8000/home/multidata");
  context.msg += res.data.data.banner.list[0].title;
});

app.listen(8000, () => {
  console.log("服务器开启成功");
});
