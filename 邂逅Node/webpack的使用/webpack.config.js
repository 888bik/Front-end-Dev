const { type } = require("os");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack");
module.exports = {
  mode:"development",
  entry:"./src/main.js",
  output: {
    filename:"bundle.js",
    path:path.resolve(__dirname,"./dist"),
    assetModuleFilename:"./img/[name].[hash][ext]"//.相对于dist目录
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:"webpack案例"
    }),
    new DefinePlugin({
      MESSAGE: "'hello webpack'"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
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
        test:/\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset",// 自动选择内联或文件输出
        parser: {
          dataUrlCondition: {
            maxSize:100*1024//限制图片的大小设置最大内联大小为 10KB
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env"]
            ]
          }
        }
      }
      // {
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader:"style-loader",
      //     },
      //     {
      //       loader:"css-loader",
      //     },
      //     {
      //       loader:"less-loader",
      //     }
      //   ]   
      // }
    ]
  }
}