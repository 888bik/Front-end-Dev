const router = require("koa-router");
const { verifyAuth } = require("../middleware/user.middleware");
const { publish } = require("../controller/moment.controller");

const momentRouter = new router({ prefix: "/moment" });


momentRouter.post("/publish", verifyAuth, publish);

module.exports = momentRouter;
