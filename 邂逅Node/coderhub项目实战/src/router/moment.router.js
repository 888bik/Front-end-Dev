const router = require("koa-router");
const { verifyAuth } = require("../middleware/user.middleware");
const { publish } = require("../controller/moment.controller");
const { verifyPermission } = require("../middleware/permissioni.middleware");
const momentController = require("../controller/moment.controller");

const momentRouter = new router({ prefix: "/moment" });

//发布动态
momentRouter.post("/publish", verifyAuth, publish);

//修改动态:需要登录的情况才可以修改,且登录用户的id要和发布动态的用户id相同才有权限修改
momentRouter.patch(
  "/update/:momentId",
  verifyAuth,
  verifyPermission,
  momentController.update
);

//删除动态
momentRouter.delete(
  "/remove/:momentId",
  verifyAuth,
  verifyPermission,
  momentController.remove
);

//查询所有动态
momentRouter.get("/", momentController.queryList);

//查询某条动态
momentRouter.get("/:momentId", momentController.query);
module.exports = momentRouter;
