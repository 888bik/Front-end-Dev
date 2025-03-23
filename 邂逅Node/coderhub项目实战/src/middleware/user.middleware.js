const {
  NAME_IS_ALREADY_EXISTS,
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_IS_NOT_EXISTS,
  USERNAME_OR_PASSWORD_IS_INCORRECT,
  UNAUTHORIZED,
} = require("../config/constant");
const { PUBLIC_KEY } = require("../config/secret");
const userService = require("../service/user.service");
const md5password = require("../utils/encryptPassword");
const jwt = require("jsonwebtoken");

/**
 * 校验用户注册中间件
 * @param {*} context
 * @param {*} next
 */
const verifyUser = async (context, next) => {
  const { username, password } = context.request.body;

  //校验user是否为空
  if (isEmpty(username, password, context)) return;

  //校验用户名是否已经存在
  const result = await userService.queryUserByName(username);
  if (result.length) {
    return context.app.emit("error", NAME_IS_ALREADY_EXISTS, context);
  }
  await next();
};

/**
 * 密码加密中间件
 * @param {*} context
 * @param {*} next
 */
const encryptPassword = async (context, next) => {
  const { password } = context.request.body;

  //对密码加密
  context.request.body.password = md5password(password);

  await next();
};

const verifyLogin = async (context, next) => {
  const { username, password } = context.request.body;

  if (isEmpty(username, password, context)) return;

  //查看用户是否存在,如果存在,检查密码是否正确
  const result = await userService.queryUserByName(username);
  const user = result[0];
  if (!user || user.password !== md5password(password)) {
    return context.app.emit(
      "error",
      USERNAME_OR_PASSWORD_IS_INCORRECT,
      context
    );
  }
  context.user = user;

  await next();
};

const verifyAuth = async (context, next) => {
  //获取token
  const authorization = context.headers.authorization;
  if (!authorization) {
    return context.app.emit("error", UNAUTHORIZED, context);
  }
  const token = authorization.replace("Bearer ", "");

  //验证token是否有效
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"],
    });
    context.user = result;

    await next();
  } catch (error) {
    context.app.emit("error", UNAUTHORIZED, context);
  }
};

/**
 * 判断帐户密码是否输入
 * @param {*} username
 * @param {*} password
 * @param {*} context
 * @returns
 */
const isEmpty = (username, password, context) => {
  if (!username || !password) {
    context.app.emit("error", NAME_OR_PASSWORD_IS_REQUIRED, context);
    return true;
  }
  return false;
};

module.exports = {
  verifyUser,
  encryptPassword,
  verifyLogin,
  verifyAuth,
};
