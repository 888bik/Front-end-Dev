const connection = require("../app/database");

class LabelService {
  async createLabel(labelName) {
    const statement = "insert into label (name) values(?);";
    const [result] = await connection.execute(statement, [labelName]);
    return result;
  }
  async getAllLabel() {
    const statement = "select * from label";
    const [result] = await connection.execute(statement);
    return result;
  }
  async queryLabelByName(labelName) {
    const statement = "select * from label where name = ?;";
    const [result] = await connection.execute(statement, [labelName]);
    return result;
  }
  async hasLabel(labelId, momentId) {
    const statement =
      "select * from moment_label where moment_id = ? and label_id = ?;";
    const [result] = await connection.execute(statement, [momentId, labelId]);
    return !!result.length;
  }
  async addLabelsToMoment(labelId, momentId) {
    const statement =
      "insert into moment_label (moment_id,label_id) value (?,?);";
    const [result] = await connection.execute(statement, [momentId, labelId]);
    return result;
  }
}
module.exports = new LabelService();
