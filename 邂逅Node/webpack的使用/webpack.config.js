const path = require("path")

module.exports = {
  entry:"./src/main.js",
  output: {
    filename:"bundle.js",
    path:path.resolve(__dirname,"./dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //写法一:只有一个loader而且不用配置其他信息可以使用这个
        // loader:"css-loader"
        //写法二:
        use: [
          { 
            loader:"style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader:"less-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader:"style-loader",
          },
          {
            loader:"css-loader",
          },
          {
            loader:"less-loader",
          }
        ]   
      }
    ]
  }
}