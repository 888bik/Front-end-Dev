const koa = require("koa");
const static = require("koa-static");

const app = new koa();

app.use(static("./dist"));

app.listen(8000, () => {
  console.log("服务器开启成功");
});
