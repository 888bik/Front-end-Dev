const connection = require("../app/database");

class MomentService {
  async publishMoment(content, userId) {
    const statement = "insert into moment(content,user_id) values(?,?)";
    const [result] = await connection.execute(statement, [content, userId]);
    return result;
  }
  async queryMomentById(momentId) {
    const statement =
      "select m.id momentId,m.content content,m.createAt createTime,m.updateAt updateTime,JSON_OBJECT('id',u.id,'name',u.name,'createTime',u.createAt,'updateTime',u.updateAt) user from moment m left join user u on u.id = m.user_id where m.id = ? ";
    const [result] = await connection.execute(statement, [momentId]);
    return result;
  }
  async updateMoment(content, momentId) {
    const statement = "update moment set content = ? where id = ?;";
    const [result] = await connection.execute(statement, [content, momentId]);
    return result;
  }
  async removeMoment(momentId) {
    const statement = "delete from moment where id = ? ;";
    const [result] = await connection.execute(statement, [momentId]);
    return result;
  }
  async queryMomentList(limit = 10, offset = 0) {
    const statement =
      "select m.id momentId, m.content content ,m.createAt createTime,m.updateAt updateTime,JSON_OBJECT('id',u.id,'name',u.name,'createTime',u.createAt,'updateTime',u.updateAt) user from moment m left join user u on u.id = m.user_id limit ? offset ? ;";
    const [result] = await connection.execute(statement, [
      String(limit),
      String(offset),
    ]);
    return result;
  }
}

module.exports = new MomentService();
