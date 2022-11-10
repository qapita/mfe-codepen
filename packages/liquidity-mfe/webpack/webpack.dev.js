const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");
const { WebpackManifestPlugin }= require('webpack-manifest-plugin');


const devConfig = {
  mode: "development",
  devServer: {
    port: 8002,
    historyApiFallback: {
      index: "index.html",
    },
    devMiddleware: {
      headers: (req, res, context) => {
        if((req.headers?.referer?.toLowerCase().indexOf('localhost') || -1) > 0){
          res.setHeader("Access-Control-Allow-Origin", "*");
        }
      },    
    }
  },
  output: {
    filename: "[contenthash].js"
  },  
  // optimization: { // ? Enabling this will enable HMR
  //   runtimeChunk: "single",
  // },
  plugins: [
    new ModuleFederationPlugin({
      name: "liquidity",
      filename: "liquidity.[contenthash:8].js",
      exposes: {
        "./LiquidityApp": "./src/App",
      },
      shared: packageJson.dependencies,
    }),
    new WebpackManifestPlugin({
			fileName: 'manifest.json',
      publicPath: '/',
			map: (file) => {
				file.name = file.name.replace(/\./g, '');
				return file;
			}
		})
  ],
};

module.exports = merge(commonConfig, devConfig);
