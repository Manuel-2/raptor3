const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const prodConfig = {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "[name].[contenthash].js",
    clean: true,
  },
};

module.exports = merge(common, prodConfig);
