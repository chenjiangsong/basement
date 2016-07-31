var path = require('path'),
    webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    watch: true,
    entry: {
        vue_bundle: path.resolve('./vue/index.js'),
        vue_common:[
            'vue',
            'underscore',
            'h5Common',
            'vueRouter'
        ]
    },
    output: {
       path: './dist/',
       filename: '[name].js',
       publicPath: ''
     },
    resolve: {
        alias: {
            h5Common: path.resolve('./common/h5_common.js'),
            vueRouter: 'vue-router'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'underscore',
            Vue: 'vue',
            vueRouter: 'vue-router'
        }),
        new ExtractTextPlugin("[name].css")
    ],
    module: {

    },
    vue: {

    }
}
