const {
  CONTENT_IS_NOT_EMPTY,
  MOMENT_IS_NOT_EXISTS,
} = require("../config/constant");
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
  async update(context, next) {
    const { content } = context.request.body;
    const { momentId } = context.params;
    const result = await momentService.updateMoment(content, momentId);
    context.body = {
      code: 0,
      message: "修改动态成功",
      data: result,
    };
  }
  async remove(context, next) {
    const { momentId } = context.params;
    const result = await momentService.removeMoment(momentId);
    context.body = {
      code: 0,
      message: "删除动态成功",
      data: result,
    };
  }
  async queryList(context, next) {
    const { offset, size } = context.query;
    const result = await momentService.queryMomentList(offset, size);
    context.body = {
      code: 0,
      message: "查询动态成功",
      data: result,
    };
  }
  async query(context, next) {
    const { momentId } = context.params;
    const result = await momentService.queryMomentById(momentId);
    if (!result.length) {
      return context.app.emit("error", MOMENT_IS_NOT_EXISTS, context);
    }
    context.body = {
      code: 0,
      message: "查询动态成功",
      data: result,
    };
  }
}
module.exports = new MomentController();
