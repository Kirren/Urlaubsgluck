'use strict';

const $             = require('gulp-load-plugins')();
const gulp          = require('gulp');
const combine       = require('stream-combiner2').obj;
const reload        = require('browser-sync').reload;

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


module.exports = function (options) {

    return function (){
        return combine(
            gulp.src(options.src),
            $.rigger(),
            $.debug({title: 'rigger'}),
            $.if( isDevelopment, $.sourcemaps.init() ),
            /* Uncomment to Uglify and minimize final .js file:

            $.uglify(),
            $.debug({title: 'uglify'}),

            */
            $.if( isDevelopment, $.sourcemaps.write('./maps') ),
            gulp.dest(options.dst),
            reload( {stream: true} )
        ).on('error', $.notify.onError());
    };
};
