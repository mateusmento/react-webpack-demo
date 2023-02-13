import { Configuration } from "webpack";
import "webpack-dev-server";

export default {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    port: "auto",
    historyApiFallback: true
  },
} as Configuration;
