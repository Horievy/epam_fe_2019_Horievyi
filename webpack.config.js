const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    indexPage: './index.js',
    blogPage: './blog.js',
    postPage: './post.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'fonts/',
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'img/',
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['indexPage'],
      template: './index.html',
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['blogPage'],
      template: './blog.html',
      filename: 'blog.html',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['postPage'],
      template: './post.html',
      filename: 'post.html',
    }),
    new CopyPlugin([
      {from: './img', to: './img'},
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000,
    open: true,
  },
};