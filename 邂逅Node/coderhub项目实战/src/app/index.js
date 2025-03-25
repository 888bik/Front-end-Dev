const koa = require("koa");
const userRouter = require("../router/user.router");
const bodyParser = require("koa-bodyparser");
const momentRouter = require("../router/moment.router");
const commentRouter = require("../router/comment.router");
const labelRouter = require("../router/label.router");
const fileRouter = require("../router/file.router");

const app = new koa();
//使用中间件
app.use(bodyParser()); //注意解析中间件要在路由中间件之前

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.use(momentRouter.routes());
app.use(momentRouter.allowedMethods());
app.use(commentRouter.routes());
app.use(commentRouter.allowedMethods());
app.use(labelRouter.routes());
app.use(labelRouter.allowedMethods());
app.use(fileRouter.routes());
app.use(fileRouter.allowedMethods());
module.exports = app;
