const app = require("../app");
const {
  NAME_IS_ALREADY_EXISTS,
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_IS_NOT_EXISTS,
  USERNAME_OR_PASSWORD_IS_INCORRECT,
  UNAUTHORIZED,
  CONTENT_IS_NOT_EMPTY,
} = require("../config/constant");

/**
 * 监听异常的处理
 */
app.on("error", (error, context) => {
  let code = 0;
  let message = "";
  switch (error) {
    case NAME_IS_ALREADY_EXISTS:
      code = -1001;
      message = "用户名已经存在";
      break;
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1002;
      message = "用户名和密码不能为空";
      break;
    case USERNAME_OR_PASSWORD_IS_INCORRECT:
      code = -1003;
      message = "用户名或者密码错误,请重新尝试";
      break;
    case UNAUTHORIZED:
      code = -1004;
      message = "未授权,请登录后再尝试";
      break;
    case CONTENT_IS_NOT_EMPTY:
      code = -1005;
      message = "发布的内容不能为空";
      break;
  }
  context.body = {
    code,
    message,
  };
});
