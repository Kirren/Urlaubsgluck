'use strict';

const $             = require('gulp-load-plugins')();
const gulp          = require('gulp');
const combine       = require('stream-combiner2').obj;
const reload        = require('browser-sync').reload;


module.exports = function (options) {
    return function (){
        return combine(
            gulp.src(options.src),
            $.imagemin(),
            gulp.dest(options.dst),
            reload( {stream: true} )
        );
    };
};