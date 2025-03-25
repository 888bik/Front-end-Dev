const { default: koaBody } = require("koa-body");
const path = require("path");

const uploadFiles = koaBody({
  multipart: true,
  formidable: {
    uploadDir: "../uploads", //这个路径以启动文件为准
    keepExtensions: true,
    onFileBegin: (name, file) => {
      const ext = file.originalFilename.split(".").pop();
      file.name = `${Date.now()}.${ext}`;
      file.path = path.join(__dirname, "uploads", file.name);
    },
  },
});

module.exports = {
  uploadFiles,
};
