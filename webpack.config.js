const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');


module.exports = {
  mode: 'development',
  context: __dirname + "/src/modules",
  entry: {
    bundle: ['./index.js', './tree.js']
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
      {
        loader: 'babel-loader',
        options: {
          presets: ["@babel/env"]
        },
      }
      /*{
        test: /\.(jpg|png|svg)$/,
        loader: 'file',
        include: './prod.bundle'
      }*/
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
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "build"), // string
    publicPath: "/build/",
  },
};