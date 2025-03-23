const { CONTENT_IS_NOT_EMPTY } = require("../config/constant");
const momentService = require("../service/moment.service");

class MomentController {
  async publish(context, next) {
    //获取发布的内容
    const { content } = context.request.body;
    //获取发布者的id
    const { id } = context.user;
    if (!content) {
      return context.app.emit("error", CONTENT_IS_NOT_EMPTY, context);
    }
    const result = await momentService.publishMoment(content, id);

    context.body = {
      code: 0,
      message: "发布动态成功",
      data: result,
    };
  }
}
module.exports = new MomentController();
