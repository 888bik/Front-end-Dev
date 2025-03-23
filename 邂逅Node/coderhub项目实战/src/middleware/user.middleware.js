const {
  NAME_IS_ALREADY_EXISTS,
  NAME_OR_PASSWORD_IS_REQUIRED,
} = require("../config/constant");
const userService = require("../service/user.service");
const md5password = require("../utils/encryptPassword");

/**
 * 校验用户
 * @param {*} context
 * @param {*} next
 */
const verifyUser = async (context, next) => {
  const { username, password } = context.request.body;
  //校验user是否为空
  if (!username || !password) {
    return context.app.emit("error", NAME_OR_PASSWORD_IS_REQUIRED, context);
  }
  //校验用户名是否已经存在
  const result = await userService.queryUserByName(username);
  if (result.length) {
    return context.app.emit("error", NAME_IS_ALREADY_EXISTS, context);
  }
  await next();
};

const encryptPassword = async (context, next) => {
  const { password } = context.request.body;

  //对密码加密
  context.request.body.password = md5password(password);
  
  await next();
};

module.exports = {
  verifyUser,
  encryptPassword,
};
