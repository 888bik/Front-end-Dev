const koa = require("koa");
const userRouter = require("../router/user.router ");
const app = new koa();

//使用中间件
app.use(userRouter.routes());
app.use()

module.exports = app;
