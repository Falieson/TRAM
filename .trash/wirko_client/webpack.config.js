var sGrid = require('s-grid');
var rupture = require('rupture');
var autoprefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/App.js'
  ],
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React with Webpack and Redux - Meteor as a backend only!',
      template: './index_template.ejs',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]!postcss'
      },
      {
        test: /\.styl$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'style!css?sourceMap&modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]!postcss!stylus-loader'
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'url-loader?name=images/[name].[ext]&limit=8192'
      }
    ]
  },
  resolve: {
    root: path.join(__dirname, '..', 'app'),
    extensions: ['', '.js', '.jsx', '.json', '.css', '.styl', '.png', '.jpg', '.jpeg', '.gif']
  },
  stylus: function () {
    return [sGrid, rupture]
  },
  postcss: function () {
    return [autoprefixer];
  }
};
