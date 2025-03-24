const {
  CONTENT_IS_NOT_EMPTY,
  MOMENT_IS_NOT_EXISTS,
} = require("../config/constant");
const labelService = require("../service/label.service");
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
  async addLabels(context, next) {
    const { labels } = context;
    const { momentId } = context.params;
    try {
      for (const label of labels) {
        //判断动态是否已经有该标签
        const isExists = await labelService.hasLabel(label.id, momentId);
        if (!isExists) {
          const result = await labelService.addLabelsToMoment(
            label.id,
            momentId
          );
        }
      }
      context.body = {
        code: 0,
        message: "添加成功",
      };
    } catch (error) {
      return (context.body = {
        code: -1001,
        message: "添加失败",
      });
    }
  }
}
module.exports = new MomentController();
