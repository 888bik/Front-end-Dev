const koa = require("koa");
const router = require("koa-router");

const app = new koa();
const userRouter = new router({ prefix: "/users" });

userRouter.get("/", (context, next) => {
  const isAuth = true;
  if (isAuth) {
    context.body = "user list data";
  } else {
    context.app.emit("error", -1001, context);
  }
});

//处理错位的逻辑,一般在独立的文件
app.on("error", (code, context) => {
  const errCode = code;
  let message = "";
  switch (errCode) {
    case -1001:
      message = "账号或者密码错误";
    case -1002:
      message = "服务器繁忙";
  }
  context.body = {
    code: errCode,
    message,
  };
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
  console.log("服务器开启成功");
});
