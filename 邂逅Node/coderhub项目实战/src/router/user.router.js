const router = require('koa-router');

const userRouter = new router({prefix:"/users"}); 

exports.module = userRouter