const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer({
  storage: multer.diskStorage({
    //目的地,即存储到哪个目录
    destination(req, file, callback) {
      callback(null, "./uploads");
    },
    //文件名
    filename(req, file, callback) {
      callback(null, Date.now() + "_" + file.originalname);
    },
  }),
});

app.post("/avatars", upload.array("avatars", 5), (req, res, next) => {
  console.log(req.files);
  res.end("文件上传成功");
});

app.listen(6000, (req, res, next) => {
  console.log("服务器开启成功");
});
