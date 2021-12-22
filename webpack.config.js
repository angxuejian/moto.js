const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Moto.js - sdk',
    })
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
    minimizer: [new UglifyJsPlugin()]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 清空dist目录
  },
};