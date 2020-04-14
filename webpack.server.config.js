const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
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
    node: {
      __dirname: false, 
      __filename: false,  
    },
    externals: [nodeExternals()], 
    module: {
      rules: [
        {
          // Transpiles ES6-8 into ES5
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  })
}