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
  async removeComment(commentId,userId) {
    const statement = "delete from comment where id = ? and user_id = ?;";
    const [result] = await connection.execute(statement, [commentId,userId]);
    return result;
  }
}
module.exports = new CommentService();
