const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJsPlugin = require("terser-webpack-plugin")
module.exports = {
  // mode: 'production',
  mode: 'development',
  entry: ['./src/index.js'],

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Moto.js - sdk',
      scriptLoading: 'blocking'
    }),
    
  ],
  module: {
    rules: [
      { // 将es6转为es5语法
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }
      }
    ]
  },

  optimization: {
    minimize: true, // 只在 production 下压缩js
    minimizer: [
      new TerserJsPlugin({
        extractComments: false, // index.js.LICENSE.txt文档
        terserOptions: {
          compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log']
          }
        }
      })
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 清空dist目录
  },
};