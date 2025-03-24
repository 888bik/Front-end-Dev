const { UNAUTHORIZED, MOMENT_IS_NOT_EXISTS } = require("../config/constant");
const momentService = require("../service/moment.service");

/**
 * 校验用户是否有操作动态的权限
 * @param {} context
 * @param {*} next
 * @returns
 */
const verifyPermissionMoment = async (context, next) => {
  //当前登录用户的id
  const { id } = context.user;
  //要修改动态的id
  const { momentId } = context.params;
  const result = await momentService.queryMomentById(momentId);
  if (!result.length) {
    return context.app.emit("error", MOMENT_IS_NOT_EXISTS, context);
  }

  if (!id === result[0].user_id) {
    return context.app.emit("error", UNAUTHORIZED, context);
  }

  await next();
};

module.exports = {
  verifyPermissionMoment,
};
