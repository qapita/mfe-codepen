const { merge } = require("webpack-merge");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8000,
    historyApiFallback: true,
    hot: true,
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {},
      shared: packageJson.dependencies,
    })
  ],
};

module.exports = merge(commonConfig, devConfig);
