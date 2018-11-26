const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
  context: __dirname + "/src/modules",
  entry: {
    create_demo_page: './create_demo_page.js',
    chart: './chart.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // include .js files
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      /*{
        test: /\.(jpg|png|svg)$/,
        loader: 'file',
        include: './images'
      }*/
    ]
  },
  devtool: 'source-map',
  devServer:
    {
      contentBase: './dist',
      hot:
        true
    }
  ,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolveLoader: {
    moduleExtensions: ["-loader"]
  }
};