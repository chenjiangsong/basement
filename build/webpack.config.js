var path = require('path'),
  webpack = require("webpack"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: {
        vue_common:'./common/h5Common.js'
    },
    output: {
       path: './dist/',
       filename: '[name].js',
       publicPath: ''
     },
    resolve: {
        
    },
    plugins: [
        new webpack.ProvidePlugin(),
        new ExtractTextPlugin("[name].css")
    ],
    moduls: {

    },
    vue: {

    }
}
