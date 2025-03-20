const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer({
  dest: "./uploads",
});

//上传单文件:singer方法
app.post("/avatar", upload.single("avatar"), (req, res, next) => {
  console.log(req.file);
  res.end("文件上传成功");
});

app.listen(6000, () => {
  console.log("服务器开启成功");
});
