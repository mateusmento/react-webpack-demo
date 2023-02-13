import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "index.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  ],
} as Configuration;
