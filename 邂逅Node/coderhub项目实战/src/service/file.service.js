const connection = require("../app/database");

class FileService {
  async uploadAvatar(filename, mimetype, size, id) {
    const statement =
      "insert into avatar(filename,mimetype,size,user_id) values (?,?,?,?);";
    const [result] = await connection.execute(statement, [
      filename,
      mimetype,
      size,
      id,
    ]);
    return result;
  }
  async queryUserAvatarById(userId) {
    const statement = "select * from avatar where user_id = ?;";
    const [result] = await connection.execute(statement, [userId]);
    return result.pop();
  }
}
module.exports = new FileService();
