const {
  MOMENT_IS_NOT_EXISTS,
  COMMENT_IS_NOT_EXISTS,
} = require("../config/constant");
const commentService = require("../service/comment.service");
const momentService = require("../service/moment.service");

class CommentController {
  async publish(context, next) {
    //获取要评论的动态id和要评论的内容
    const { momentId, content } = context.request.body;
    const { id } = context.user;
    const isExists = await momentService.queryMomentById(momentId);
    if (!isExists.length) {
      return context.app.emit("error", MOMENT_IS_NOT_EXISTS, context);
    }
    const result = await commentService.publishComment(content, momentId, id);
    context.body = {
      code: 0,
      message: "发表评论成功",
      data: result,
    };
  }
  async reply(context, next) {
    const { momentId, content, commentId } = context.request.body;
    const { id } = context.user;
    try {
      const result = await commentService.replyComment(
        content,
        momentId,
        id,
        commentId
      );
      context.body = {
        code: 0,
        message: "回复评论成功",
        data: result,
      };
    } catch (error) {
      return context.app.emit("error", COMMENT_IS_NOT_EXISTS, context);
    }
  }
}
module.exports = new CommentController();
