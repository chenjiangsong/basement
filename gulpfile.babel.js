
import gulp from 'gulp'
import webpack from 'webpack'
import config from './webpack.config.js'
import fse from 'fs-extra'
import yargs from 'yargs'
import path from 'path'
import colors from 'colors'

const argv = yargs.argv

let isProduct = false

gulp.task('default', () => {
    isProduct = argv.product
    fse.emptydirSync('./dist')
    gulp.start('webpack')
})

gulp.task('webpack', () => {

    if (isProduct) {
        config.watch = false
        config.plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }))
    }

    webpack(config, logback)

})

function logback(err, stats) {
    // console.log(stats.toString());
    if (stats.hasErrors() || stats.hasWarnings()) {
        console.log('\n==============================');
        console.log(stats.compilation.errors.toString() || stats.compilation.warnings.toString());
    } else {
        console.log('--------------------------------------');
        console.log('webpack success at %s', new Date(stats.endTime).toLocaleString());
    }
}
