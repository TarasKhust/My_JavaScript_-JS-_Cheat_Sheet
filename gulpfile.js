var gulp = require('gulp');
var stylus = require('gulp-stylus');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var minify = require('gulp-csso');
var autoprefixer = require('autoprefixer');
var pug = require('gulp-pug');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var server = require('browser-sync').create();

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
        .pipe(pug({

            // Your options in here.
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['stylus'], function () {
    server.init({
        server:'dist',
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch('src/**/*.styl', ['stylus']);
    gulp.watch('src/**/*.pug').on('change', server.reload);
});