const router = require("koa-router");
const userController = require("../controller/user.controller");
// const { register, sign } = require("../controller/user.controller");
const {
  verifyAuth,
  verifyUser,
  encryptPassword,
  verifyLogin,
} = require("../middleware/user.middleware");

const userRouter = new router({ prefix: "/users" });

userRouter.post(
  "/register",
  verifyUser,
  encryptPassword,
  userController.register
);

userRouter.post("/login", verifyLogin, userController.signToken);

userRouter.get("/avatar/:userId", userController.showUserAvatar);

userRouter.get("/test", verifyAuth, userController.testAuth);

module.exports = userRouter;
