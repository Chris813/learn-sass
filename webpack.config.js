const path = require("path"); //nodejs提供的路径模块
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  //模型
  mode: "development",
  devtool: "cheap-module-source-map",
  //入口 可以采用相对路径
  entry: "./src/main.js", //默认
  //输出
  output: {
    path: path.resolve(__dirname, "dist"), //需要绝对路径
    filename: "main.js",
    clean: true,
  },
  module: {
    //loader
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "5500", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
  },
};
