'use strict';

const $         = require('gulp-load-plugins')();
const gulp      = require('gulp');
const rimraf    = require('rimraf');

module.exports = function (options) {
    return function (callback){
        $.debug({title: 'deleting previous instances of the project'});
        return rimraf(options.dst, callback);
    };
};