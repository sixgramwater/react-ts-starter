const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './lib/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // library: 'liquidUI',
    // libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello Webpack',
      template: 'index.html'
    })
  ]
}