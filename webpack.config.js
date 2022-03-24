const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserJsPlugin = require("terser-webpack-plugin")

const resolve = file => {
  return path.resolve(__dirname, file)
}

module.exports = {
  // mode: 'production',
  // mode: 'development',
  entry: ['./src/index.js'],

  // node版本需要 >= v12.13.0
  devServer: {
    static: {
      directory: resolve('public')
    },
    compress: true,
    port: 1548
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Moto.js - sdk',
      template: resolve('public/index.html'),
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
    path: resolve('dist'),
    clean: true, // 清空dist目录
  },
};