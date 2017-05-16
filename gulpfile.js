'use strict';

// Add environment variables
switch (process.env.NODE_ENV) {

  case 'production':
    require('dotenv').config({path: './env/prod.env'}); break;

  case 'development':
  default:
    require('dotenv').config({path: './env/dev.env'}); break;

}


const $             = require('gulp-load-plugins')();
const gulp          = require('gulp');
//const nodePath       = require('path');



// Check the status of the workflow
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV
    == 'development';



// Paths declaration

var path = {
    build: { // destination folders
        html:   'public/',
        js:     'public/js/',
        css:    'public/css/',
        img:    'public/img/',
        fonts:  'public/fonts/'
    },
    src: { // directories of source files
        html:   'src/html/index.pug',
        js:     'src/js/main.js',
        style:  'src/styles/main.scss',
        assets: 'src/styles/_assets',
        img:    'src/img/**/*.*',
        fonts:  'src/fonts/**/*.*',
        fa:     'bower_components/fontawesome/fonts'
    },
    watch: { // watch changes of the specific files or directories
        html:   'src/html/**/*.pug',
        js:     'src/js/**/*.js',
        style:  'src/styles/**/*.scss',
        assets: 'src/styles/_assets/**/*.*',
        img:    'src/img/**/*.*',
        fonts:  'src/fonts/**/*.*'
    },
    clean:  './public'
};


// Bower and FontAwesome configuration

var config = {
    sassPath:  './src/styles',
    bowerPath: './bower_components'
};

gulp.task('icons', function() {
    return gulp.src(config.bowerPath + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});


// Lazy tasks declaration and connection

function lazyRequireTask(taskName, path, options){
    options = options || {};
    options.taskName = taskName;
    gulp.task(taskName, function(callback){
        let task = require(path).call(this, options);

        return task(callback);
    });
}

lazyRequireTask('clean', './tasks/clean', {
    dst: path.clean
});

lazyRequireTask('styles', './tasks/styles', {
    src: path.src.style,
    dst: path.build.css
});

lazyRequireTask('scripts', './tasks/scripts', {
    src: path.src.js,
    dst: path.build.js
});

lazyRequireTask('html', './tasks/html', {
    src: path.src.html
});

/*lazyRequireTask('assets', './tasks/assets', {
    src: path.src.assets,
    dst: path.build.css
});*/

lazyRequireTask('images', './tasks/images', {
    src: path.src.img,
    dst: path.build.img
});

lazyRequireTask('fonts', './tasks/fonts', {
    src: path.src.fonts,
    dst: path.build.fonts
});


// General tasks


gulp.task('build', gulp.series(
    ['images', 'icons', 'fonts', 'scripts', /*'assets',*/ 'html', 'styles']
));

gulp.task('watch', gulp.parallel(
    function() {
        gulp.watch(path.watch.html, gulp.series('html'));

        gulp.watch(path.watch.img, gulp.series('images'));

        gulp.watch(path.watch.style, gulp.series('styles'));

        //gulp.watch(path.watch.assets, gulp.series('assets'));

        gulp.watch(path.watch.js, gulp.series('scripts'));

        gulp.watch(path.watch.fonts, gulp.series('fonts'));
    }
));

lazyRequireTask('serve', './tasks/serve', {
    src: 'public'
});

gulp.task('default',
    gulp.series('clean', 'build', gulp.parallel('serve', 'watch'))
);

lazyRequireTask('lint', './tasks/lint', {
    cacheFilePath: process.cwd() + '/temp/lintCache.json',
    src: path.src.js
});
