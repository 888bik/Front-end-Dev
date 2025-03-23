const userService = require("../service/user.service");

class UserController {
  //创建用户的中间件
  async createUser(context, next) {
    const user = context.request.body;

    const result = await userService.createUser(user);

    //给客户端返回响应
    context.body = {
      code: 1001,
      message: "创建用户成功",
      data: result,
    };
  }
}

module.exports = new UserController();
