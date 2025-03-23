const app = require("./app/index");
const { SERVER_PORT } = require("./config/server");
require("./utils/handleError")

app.listen(SERVER_PORT, () => {
  console.log("服务器开启成功");
});
