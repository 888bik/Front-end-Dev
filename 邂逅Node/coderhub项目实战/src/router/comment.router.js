const router = require('koa-router');
const { verifyAuth } = require('../middleware/user.middleware');
const commentController = require('../controller/comment.controller');

const commentRouter = new router({prefix:"/comment"})

commentRouter.post("/publish",verifyAuth,commentController.publish)

commentRouter.post("/reply",verifyAuth,commentController.reply)

commentRouter.delete("/remove/:id",verifyAuth,commentController.remove)
module.exports = commentRouter