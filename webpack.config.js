const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
module.exports = (env, argv) => {
return ({
    entry: {
      server: './src/server.js' ,
    },
    output: {
      path: __dirname,
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