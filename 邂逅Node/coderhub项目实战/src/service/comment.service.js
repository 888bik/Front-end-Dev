const connection = require("../app/database");

class CommentService {
  async publishComment(content, momentId, userId) {
    const statement =
      "insert into comment(content,moment_id,user_id) values(?,?,?) ";
    const [result] = await connection.execute(statement, [
      content,
      momentId,
      userId,
    ]);
    return result;
  }
  async replyComment(content, momentId, userId, commentId) {
    const statement =
      "insert into comment(content,moment_id,user_id,comment_id) values(?,?,?,?)";
    const [result] = await connection.execute(statement, [
      content,
      momentId,
      userId,
      commentId,
    ]);
    return result;
  }
  async removeComment(id) {
    const statement = "delete from comment where id =?;";
    const [result] = await connection.execute(statement, [id]);
    return result;
  }
}
module.exports = new CommentService();
