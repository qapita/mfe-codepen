const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8000,
    historyApiFallback: {
      index: "/",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        approval: "approval@[window.approvalMFE]/remoteEntry.js",
        liquidity: "liquidity@[window.liquidityMFE]/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
    new ExternalTemplateRemotesPlugin(),
  ],
};

module.exports = merge(commonConfig, devConfig);
