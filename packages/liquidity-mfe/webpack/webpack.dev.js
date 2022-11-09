const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8002,
    historyApiFallback: {
      index: "index.html",
    },
  },
  // optimization: { // ? Enabling this will enable HMR
  //   runtimeChunk: "single",
  // },
  plugins: [
    new ModuleFederationPlugin({
      name: "liquidity",
      filename: "remoteEntry.js",
      exposes: {
        "./LiquidityApp": "./src/App",
      },
      shared: packageJson.dependencies,
    }),
  ],
};



module.exports = merge(commonConfig, devConfig);
