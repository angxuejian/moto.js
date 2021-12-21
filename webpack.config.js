const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Moto.js - sdk',
    })
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 清空dist目录
  },
};