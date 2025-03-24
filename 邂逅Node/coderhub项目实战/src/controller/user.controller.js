const { PRIVATE_KEY } = require("../config/secret");
const userService = require("../service/user.service");
const jwt = require("jsonwebtoken");

class UserController {
  //创建用户的中间件
  async register(context, next) {
    const user = context.request.body;

    const result = await userService.createUser(user);

    //给客户端返回响应
    context.body = {
      code: 0,
      message: "创建用户成功",
      data: result,
    };
  }

  //颁发令牌的中间件
  sign(context, next) {
    const { id, name } = context.user;

    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 24 * 60 * 60,
      algorithm: "RS256",
    });
    context.body = {
      code: 0,
      message: "登录成功",
      data: { id, name, token },
    };
  }

  //测试token是否有效
  testAuth(context, next) {
    context.body = {
      code: 0,
      message: "认证成功",
    };
  }
}

module.exports = new UserController();
