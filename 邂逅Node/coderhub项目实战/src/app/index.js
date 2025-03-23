const koa = require("koa");
const userRouter = require("../router/user.router");
const bodyParser = require("koa-bodyparser");
const momentRouter = require("../router/moment.router");

const app = new koa();

//使用中间件
app.use(bodyParser()); //注意解析中间件要在路由中间件之前
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.use(momentRouter.routes());
app.use(momentRouter.allowedMethods());

module.exports = app;
