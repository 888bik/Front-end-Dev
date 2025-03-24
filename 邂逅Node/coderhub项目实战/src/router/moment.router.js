const router = require("koa-router");
const { verifyAuth } = require("../middleware/user.middleware");
const { publish } = require("../controller/moment.controller");
const {
  verifyPermissionMoment,
} = require("../middleware/permission.middleware");
const momentController = require("../controller/moment.controller");
const { verifyLabelExists } = require("../middleware/label.middleware");

const momentRouter = new router({ prefix: "/moment" });

//发布动态
momentRouter.post("/publish", verifyAuth, publish);

//修改动态:需要登录的情况才可以修改,且登录用户的id要和发布动态的用户id相同才有权限修改
momentRouter.patch(
  "/update/:momentId",
  verifyAuth,
  verifyPermissionMoment,
  momentController.update
);

//删除动态
momentRouter.delete(
  "/remove/:momentId",
  verifyAuth,
  verifyPermissionMoment,
  momentController.remove
);

//查询所有动态
momentRouter.get("/list", momentController.queryList);

//查询某条动态
momentRouter.get("/:momentId", momentController.queryDetail);

//给动态添加标签
momentRouter.post(
  "/:momentId/labels",
  verifyAuth,
  verifyPermissionMoment,
  verifyLabelExists,
  momentController.addLabels
);
module.exports = momentRouter;
