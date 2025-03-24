const connection = require("../app/database");

//进行数据库操作
class UserService {
  /**
   * 创建用户
   * @param {} user
   * @returns
   */
  async createUser(user) {
    const { username, password } = user;
    const statement = "insert into user(name,password) values(?,?);";
    const [result] = await connection.execute(statement, [username, password]);
    return result;
  }
  async queryUserByName(userName) {
    const statement = "select * from user where name = ?";
    const [result] = await connection.execute(statement, [userName]);
    return result;
  }
}
module.exports = new UserService();
