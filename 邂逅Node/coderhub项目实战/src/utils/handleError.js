const app = require("../app");
const {
  NAME_IS_ALREADY_EXISTS,
  NAME_OR_PASSWORD_IS_REQUIRED,
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
  }
  context.body = {
    code,
    message,
  };
});
