const connection = require("../app/database");
const fileService = require("../service/file.service");
const { SERVER_HOST, SERVER_PORT } = require("../config/server");
const userService = require("../service/user.service");
class FileController {
  async uploadFiles(context, next) {
    const { newFilename, size, mimetype } = context.request.files.avatar;
    const { id } = context.user;

    //将头像和user结合起来存储
    const result = await fileService.uploadAvatar(
      newFilename,
      mimetype,
      size,
      id
    );
    //更新用户表的头像地址
    const avatarUrl = `${SERVER_HOST}:${SERVER_PORT}/users/avatar/${id}`;
    const result2 = await userService.updateUserAvatar(avatarUrl, id);

    context.body = {
      code: 0,
      message: "头像上传成功",
    };
  }
}
module.exports = new FileController();
