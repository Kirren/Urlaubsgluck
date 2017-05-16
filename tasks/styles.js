'use strict';

const $             = require('gulp-load-plugins')({
    rename: { 'gulp-clean-css': 'cleancss' }
});
const gulp          = require('gulp');
const combine       = require('stream-combiner2').obj;
const reload        = require('browser-sync').reload;

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


module.exports = function (options) {

    return function (){
        return combine(
            gulp.src(options.src/*, { since: gulp.lastRun('styles') }*/),
            $.if(isDevelopment, $.sourcemaps.init()),
            $.sass({
                sourceMap: true,
                errLogToConsole: true,
                loadPath: [
                    './bower_components/bootstrap-sass/assets/stylesheets',
                    './bower_components/font-awesome/scss',
                    options.src
                ],
                includePaths: require('node-bourbon').includePaths
            }).on("error", $.sass.logError),
            $.debug({title: 'sass'}),
            $.autoprefixer(),
            $.debug({title: 'autoprefixer'}),
            $.cleancss(),
            $.debug({title: 'cleancss'}),
            $.if(isDevelopment, $.sourcemaps.write('./maps')),
            gulp.dest(options.dst),
            reload( {stream: true} )
        )/*.on('error', $.notify.onError(function(error){
            return "Error: " + error.message;
        }))*/;
    };

};