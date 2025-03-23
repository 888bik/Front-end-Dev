const crypto = require("crypto");

/**
 * 对明文密码进行md5加密
 * @param {*明文} password 
 * @returns 
 */
function md5password(password) {
  const md5 = crypto.createHash("md5");
  const md5pwd = md5.update(password).digest("hex");
  return md5pwd;
}

module.exports = md5password;
