const connection = require("../app/database");

class MomentService {
  async publishMoment(content, userId) {
    const statement = "insert into moment(content,user_id) values(?,?)";
    const [result] = await connection.execute(statement, [content, userId]);
    return result;
  }
}
module.exports = new MomentService();
