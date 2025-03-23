const koa = require("koa");
const userRouter = require("../router/user.router");
const bodyParser = require("koa-bodyparser");

const app = new koa();

//使用中间件
app.use(bodyParser());//注意解析中间件要在路由中间件之前
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

module.exports = app;
