const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
module.exports = (env, argv) => {
  const SERVER_PATH = (argv.mode === 'production') ?
    './src/server/server-prod.js' :
    './src/server/server-dev.js' 
  const OUTPUT_PATH = (argv.mode === 'production') ?
     __dirname :
     path.join(__dirname, "dist")
  
return ({
    entry: {
      server: SERVER_PATH,
    },
    output: {
      path: OUTPUT_PATH,
      publicPath: '/',
      filename: '[name].js'
    },
    target: 'node',
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
      ]
    },
    node: {
      __dirname: false, 
      __filename: false,  
    },
    externals: [nodeExternals()], 
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ]
  })
}