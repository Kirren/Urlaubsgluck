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
            $.if(isDevelopment, $.sourcemaps.init()),
            $.rigger(),
            $.debug({title: 'rigger'}),
            $.pug(),
            $.debug({title: 'pug'}),
            $.if(isDevelopment, $.sourcemaps.write()),
            gulp.dest('public'),
            reload( {stream: true} )
        );
    };

};