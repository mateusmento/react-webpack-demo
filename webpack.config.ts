import { Configuration } from "webpack";

export default {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index.js"
  }
} as Configuration;
