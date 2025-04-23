const path = require("path");
module.exports = {
  entry: "./src/index.js", //Webpack 会从这些入口文件开始按图索骥找出所有项目文件
  output: {
    //输出
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
    // 重新打包时, 先将之前打包的文件夹删除掉
    clean: true,
  },
  module: {
    rules: [
      {
        // test: /\.less?$/,
      },
    ],
  },
};
