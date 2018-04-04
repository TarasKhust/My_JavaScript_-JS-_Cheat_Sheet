'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var minify = require('gulp-csso');
var autoprefixer = require('autoprefixer');
var pug = require('gulp-pug');
var pugbem = require('gulp-pugbem');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var webp = require('gulp-webp');
var svgstore = require('gulp-svgstore');
var posthtml = require('gulp-posthtml');
var include = require('posthtml-include');
var run = require('run-sequence');
var del = require('del');
var uglify = require('gulp-uglify');
var pump = require('pump');
var server = require('browser-sync').create();

gulp.task('compress', function (cb) {
    pump([
            gulp.src('js/*.js'),
            uglify(),
            gulp.dest('dist/js')
        ],
        cb
    );
});
gulp.task('clean', function () {
    return del('dist');
});
gulp.task('copy', function () {
    return gulp.src([
        'src/fonts/**/*.{woff,woff2}',
        'src/img/**',
        'src/js/**'
    ],  {
         base: '.'
    })
        .pipe(gulp.dest('dist'));
});
gulp.task('build', function (done) {
    run('clean', 'copy', 'stylus', 'sprite', 'pug', done);
});
gulp.task('pages', function () {
    return gulp.src('src/pug/**/*.pug')
        .pipe(pug({
            plugins: [pugbem]
        }))
        .pipe(gulp.dest('dist'));
});
gulp.task('stylus', function () {
    gulp.src('src/css/style.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('dist/css'))
        .pipe(minify())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(server.stream());
});
gulp.task('images', function () {
    return gulp.src('src/**/*.{png,jpg,svg}')
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.jpegtran({progressive: true}),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest('dist/img'))

});
gulp.task('pug', function buildHTML() {
    return gulp.src('src/pug/pages/index.pug')
        .pipe(plumber())
        .pipe(pug({

            // Your options in here.
        }))
        .pipe(gulp.dest('dist'));
});
gulp.task('webp', function () {
    return gulp.src('src/**/*.{png,jpg}')
        .pipe(webp({quality: 90}))
        .pipe(gulp.dest('dist/img'));

});
gulp.task('sprite', function () {
    return gulp.src('src/icons/*.svg')
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename('sprite.svg'))
        .pipe(gulp.dest('dist/img'));

});
gulp.task('html', function () {
    return gulp.src('src/pug/index.html')
        .pipe(posthtml([
            include()
        ]))
        .pipe(gulp.dest('.'));

});
gulp.task('serve', function () {
    server.init({
        server:'dist/',
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch('src/**/*.styl', ['stylus']);
    gulp.watch('src/**/*.pug', ['pug']);
});