const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 7001,
    historyApiFallback: {
      index: "index.html",
    },
  },
  optimization: {
    runtimeChunk: "single",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "approval",
      filename: "remoteEntry.js",
      exposes: {
        "./ApprovalApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
