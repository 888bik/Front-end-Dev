const Router = require("koa-router");
const { verifyAuth } = require("../middleware/user.middleware");
const { uploadFiles } = require("../middleware/file.middleware");
const fileController = require("../controller/file.controller");

const fileRouter = new Router({ prefix: "/file" });

fileRouter.post("/avatar", verifyAuth, uploadFiles, fileController.uploadFiles);
module.exports = fileRouter;
