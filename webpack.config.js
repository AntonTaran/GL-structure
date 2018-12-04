const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
const devMode = process.env.NODE_ENV;

module.exports = {
  mode : devMode,
  context: __dirname + "/src/",
  entry: ['./modules/index.js', /*'./modules/tree.js'*/],

  module: {
    rules: [
      {
        test: /\.js$/, // include .js files
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
      },
      {
        loader: 'babel-loader',
        options: {
          presets: ["@babel/env"]
        },
      },
      {
        test: /\.s?.css$/,
        use: [
          devMode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  devtool: 'inline-source-map',
  devServer:
    {
      contentBase: './',
      publicPath: '/build/',
      watchContentBase: true,
      hot: true
    },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MergeIntoSingleFilePlugin({
      files: {
        "prod.bundle.js": [
          './src/modules/index.js',
          './src/modules/tree.js',
        ],
      }
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
      publicPath: "/build/",
    })
  ],
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, "build"), // string
    publicPath: "/build/",
  },
};

console.log(devMode);
