const connection = require("../app/database");

class MomentService {
  async publishMoment(content, userId) {
    const statement = "insert into moment(content,user_id) values(?,?)";
    const [result] = await connection.execute(statement, [content, userId]);
    return result;
  }
  async queryMomentById(momentId) {
    const statement = "select * from moment where id = ? ";
    const [result] = await connection.execute(statement, [momentId]);
    return result;
  }
  async updateMoment(content, momentId) {
    const statement = "update moment set content = ? where id = ?";
    const [result] = await connection.execute(statement, [content, momentId]);
    return result;
  }
}
module.exports = new MomentService();
