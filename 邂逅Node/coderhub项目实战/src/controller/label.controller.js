const { LABEL_NAME_IS_ALREADY_EXISTS } = require("../config/constant");
const labelService = require("../service/label.service");

class LabelController {
  async add(context, next) {
    const { labelName } = context.request.body;
    try {
      const result = await labelService.createLabel(labelName);
      context.body = {
        code: 0,
        message: "创建标签成功",
        data: result,
      };
    } catch (error) {
      return context.app.emit("error", LABEL_NAME_IS_ALREADY_EXISTS, context);
    }
  }
  async list(context, next) {
    try {
      const result = await labelService.getAllLabel();
      context.body = {
        code: 0,
        message: "查询成功",
        data: result,
      };
    } catch (error) {
      context.body = {
        code: -1001,
        message: "查询失败",
      };
    }
  }
}
module.exports = new LabelController();
