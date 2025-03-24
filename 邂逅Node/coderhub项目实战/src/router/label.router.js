const Router = require("koa-router");
const { verifyAuth } = require("../middleware/user.middleware");
const labelController = require("../controller/label.controller");

const labelRouter = new Router({ prefix: "/label" });

labelRouter.post("/add", verifyAuth, labelController.add);

labelRouter.get("/list", labelController.list);
module.exports = labelRouter;
