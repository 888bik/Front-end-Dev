const router = require("koa-router");
const userController = require("../controller/user.controller");
const {
  verifyUser,
  encryptPassword,
} = require("../middleware/user.middleware");

const userRouter = new router({ prefix: "/users" });

userRouter.post(
  "/register",
  verifyUser,
  encryptPassword,
  userController.createUser
);

//导出路由
module.exports = userRouter;
