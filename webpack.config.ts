import { Configuration } from "webpack";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index.js"
  },
  devServer: {
    hot: true,
    open: true,
    port: "auto",
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  ],
} as Configuration;
