"use strict";

var gulp = require("gulp"),
    autoprefixer = require("gulp-autoprefixer"),
    cssbeautify = require("gulp-cssbeautify"),
    removeComments = require('gulp-strip-css-comments'),
    rename = require("gulp-rename"),
    sass = require("gulp-sass"),
    stylus = require('gulp-stylus'),
    cssnano = require("gulp-cssnano"),
    rigger = require("gulp-rigger"),
    uglify = require("gulp-uglify"),
    pug = require('gulp-pug'),
    watch = require("gulp-watch"),
    plumber = require("gulp-plumber"),
    imagemin = require("gulp-imagemin"),
    run = require("run-sequence"),
    rimraf = require("rimraf"),
    webp = require("gulp-webp"),
    data = require('gulp-data'),
    svgstore = require('gulp-svgstore'),
    imageResize = require('gulp-image-resize'),
    imgRetina = require('gulp-img-retina'),
    responsive = require('gulp-responsive'),
    imacss = require('gulp-imacss'),
    pugGlobbing  = require('gulp-pug-globbing'),
    webserver = require("browser-sync");



/* Paths to source/build/watch files
=========================*/

var path = {
    build: {
        html: "dist/",
        js: "dist/assets/js/",
        css: "dist/assets/css/",
        img: "dist/assets/images/",
        fonts: "dist/assets/fonts/",
        json: "dist/assets/"
    },
    src: {
        html: "src/*.{htm,html,php}",
        pug: "src/assets/pug/**/*.{pug,jade}",
        js: "src/assets/js/*.js",
        sass: "src/assets/sass/style.scss",
        stylus: "src/assets/css/style.styl",
        img: "src/assets/images/**/*.*",
        sprite: "src/assets/images/icons/*.svg",
        fonts: "src/assets/fonts/**/*.*",
        json: "src/assets/*.json"
    },
    watch: {
        html: "src/**/*.{htm,html,php}",
        pug: "src/assets/pug/**/*.{pug,jade}",
        js: "src/assets/js/**/*.js",
        sass: "src/assets/sass/**/*.scss",
        stylus: "src/assets/css/**/*.scss",
        img: "src/assets/images/**/*.*",
        fonts: "src/assets/fonts/**/*.*",
        json: "src/assets/*.json"
    },
    clean: "./dist"
};



/* Webserver config
=========================*/

var config = {
    server: "dist/",
    notify: false,
    open: true,
    ui: false
};



/* Tasks
=========================*/

gulp.task("webserver", function () {
    webserver(config);
});


gulp.task("html:build", function () {
    return gulp.src(path.src.html)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(webserver.reload({stream: true}));
});


gulp.task('pug:build', function(){
    return gulp.src(path.src.pug)
        .pipe(plumber())
        .pipe(pugGlobbing({
            placeholder: {
                'modules': 'src/assets/pug/pages/*.pug',
            },
            ignore: ['src/pug/layout/templates']
        }))
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(path.build.html))
        .pipe(webserver.reload({stream: true}));
});


gulp.task("css:build", function () {
    gulp.src(path.src.stylus)
        .pipe(plumber())
        .pipe(stylus().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ["last 8 versions"],
            cascade: true
        }))
        .pipe(cssbeautify())
        .pipe(gulp.dest(path.build.css))
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(removeComments())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest(path.build.css))
        .pipe(webserver.reload({stream: true}));
});

gulp.task("js:build", function () {
    gulp.src(path.src.js)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
        .pipe(uglify())
        .pipe(rename("main.min.js"))
        .pipe(gulp.dest(path.build.js))
        .pipe(webserver.reload({stream: true}));
});


gulp.task("fonts:build", function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});


gulp.task("image:build", function () {
    gulp.src(path.src.img)
        .pipe(imagemin({
            optimizationLevel: 3,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img));
});


gulp.task('image:webp', function () {
    gulp.src(path.src.img)
        .pipe(webp({quality: 90}))
        .pipe(gulp.dest(path.build.img));

});


gulp.task('image:sprite', function () {
    gulp.src(path.src.sprite)
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename('sprite.svg'))
        .pipe(gulp.dest(path.build.img));

});


gulp.task('image:resize', function () {
    gulp.src(path.src.img)
        .pipe(plumber())
        .pipe(imageResize({
            width : 100,
            height : 100,
            crop : true,
            upscale : false
        }))
        .pipe(gulp.dest(path.build.img));
});


gulp.task('image:retina', function() {
    gulp.src(path.src.html)
        .pipe(plumber())
        .pipe(imgRetina(retinaOpts))
        .on('error', function(e) {
            console.log(e.message);
        })
        .pipe(gulp.dest(path.build.html));

});


gulp.task('image:responsive', function () {
    gulp.src(path.src.img)
        .pipe(plumber())
        .pipe(responsive({
            'background-*.jpg': {
                width: 700,
                quality: 50
            },
            'cover.png': {
                width: '50%',
                // convert to jpeg format
                format: 'jpeg',
                rename: 'cover.jpg'
            },
            // produce multiple images from one source
            '2-layers.png': [
                {
                    width: 200
                },{
                    width: 200 * 2,
                    rename: 'logo@2x.png'
                }
            ]
        }))
        .pipe(gulp.dest(path.build.html));
});


gulp.task("json:build", function() {
    gulp.src(path.src.json)
        .pipe(gulp.dest(path.build.json));
});


gulp.task("clean", function (cb) {
    rimraf(path.clean, cb);
});


gulp.task('build', function (cb) {
    run(
        "clean",
        "html:build",
        "pug:build",
        "css:build",
        "js:build",
        "fonts:build",
        "image:build",
        "image:sprite",
        "json:build"
        , cb);
});


gulp.task("watch", function() {
    watch([path.watch.html], function(event, cb) {
        gulp.start("html:build");
    });
    watch([path.watch.html], function(event, cb) {
        gulp.start("pug:build");
    });
    watch([path.watch.css], function(event, cb) {
        gulp.start("css:build");
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start("js:build");
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start("image:build");
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start("image:sprite");
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start("fonts:build");
    });
    watch([path.watch.json], function(event, cb) {
        gulp.start("json:build");
    });
});


gulp.task("default", function (cb) {
    run(
        "clean",
        "build",
        "webserver",
        "watch"
        , cb);
});
