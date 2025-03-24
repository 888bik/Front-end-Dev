const app = require("../app");
const {
  NAME_IS_ALREADY_EXISTS,
  NAME_OR_PASSWORD_IS_REQUIRED,
  USERNAME_OR_PASSWORD_IS_INCORRECT,
  UNAUTHORIZED,
  CONTENT_IS_NOT_EMPTY,
  MOMENT_IS_NOT_EXISTS,
  COMMENT_IS_NOT_EXISTS,
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
      message = "您暂时没有权限操作此内容";
      break;
    case CONTENT_IS_NOT_EMPTY:
      code = -1005;
      message = "发布的内容不能为空";
      break;
    case MOMENT_IS_NOT_EXISTS:
      code = -1006;
      message = "操作的动态不存在";
      break;
    case COMMENT_IS_NOT_EXISTS:
      code = -1007;
      message = "回复失败,该评论已被删除";
      break;
  }
  context.body = {
    code,
    message,
  };
});
