var gulp = require('gulp')
    webpack = require('webpack')
    config = require('./webpack.config.js')
    fse = require('fs-extra')
    argv = require('yargs').argv
    path = require('path')


var isProduct = false

gulp.task('default', () => {
    isProduct = argv.product
    fse.emptydirSync('./dist')
    gulp.start('webpack')
})

gulp.task('webpack', () => {
    var minify = [];

    if (isProduct) {
        config.watch = false
        config.plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }))
    }

    webpack(config, (err, stats) => {
        console.log(stats.toString());
    })
})
