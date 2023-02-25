import { Configuration } from "webpack";
import "webpack-dev-server";

export default {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    port: "auto",
    historyApiFallback: true,
    static: {
      directory: "./src/assets",
      publicPath: "/assets",
      watch: true,
    },
  },
} as Configuration;
