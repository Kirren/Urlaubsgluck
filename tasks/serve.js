'use strict';

const gulp          = require('gulp');
const browserSync   = require('browser-sync').create();


module.exports = function (options) {
    return function () {
        browserSync.init({
            // Server configuration

            server: options.src,
            tunnel: true,
            host: 'localhost',
            port: 9000,
            logPrefix: "Kirren"

        });

        browserSync.watch('public/**/*.*').on('change', browserSync.reload);
    }
};