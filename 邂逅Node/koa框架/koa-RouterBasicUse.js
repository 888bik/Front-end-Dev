const koa = require("koa");
const router = require("koa-router");

const app = new koa();
const userRouter = new router({ prefix: "/users" });

userRouter.get("/", (context, next) => {
  context.body = "获取用户数据";
});

userRouter.get("/:id", (context, next) => {
  const { id } = context.params;
  context.body = `获取用户${id}数据`;
});

userRouter.post("/login", (context, next) => {
  context.body = "登录成功";
});

app.use(userRouter.routes());
//如果客户端发送的请求方法没有在上面路由定义时,会返回405Method Not Allowed状态码
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
  console.log("服务器开启成功");
});
