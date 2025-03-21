const koa = require("koa");

const app = new koa();

app.use((context, next) => {
  if (context.path === "/login" && context.method === "POST") {
    console.log("登录成功");
    context.body = "登录成功";
  } else if (context.path === "/register" && context.method === "POST") {
    console.log("注册成功");
    context.body = "注册成功";
  } else if (context.path === "/home" && context.method === "GET") {
    console.log("获取home数据");
    context.body = "获取home数据";
  } else {
    context.body = "服务器繁忙,请稍后重试";
  }
});

app.listen(8000, () => {
  console.log("服务器开启成功");
});
