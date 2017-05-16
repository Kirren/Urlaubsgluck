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
            port: process.env.PORT,
            logPrefix: "Kirren",
            open: true,
            notify: true

        });

        browserSync.watch('public/**/*.*').on('change', browserSync.reload);
    }
};
