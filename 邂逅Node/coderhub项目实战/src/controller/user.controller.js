const { PRIVATE_KEY } = require("../config/secret");
const fileService = require("../service/file.service");
const userService = require("../service/user.service");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const { UPLOAD_PATH } = require("../config/path");

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
  signToken(context, next) {
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
  async showUserAvatar(context, next) {
    const { userId } = context.params;
    try {
      const avatarInfo = await fileService.queryUserAvatarById(userId);
      const { filename, mimetype } = avatarInfo;
      context.type = mimetype;
      context.body = fs.createReadStream(`${UPLOAD_PATH}/${filename}`);
    } catch (error) {
      return (context.body = {
        code: "-1001",
        message: "查询失败,该资源不存在",
      });
    }
  }
}

module.exports = new UserController();
