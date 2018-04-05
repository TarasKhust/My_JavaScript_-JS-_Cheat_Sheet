module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        postcss: {
            style: {
                options: {
                    processors: [
                        require('autoprefixer')()
                    ]
                },
                src: 'dist/css/*.css'
            }
        },
        clean: {
            dist: ['dist']
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    src: [
                        'src/fonts/**/*.{woff,woff2}',
                        'src/images/**',
                        'src/js/**'
                    ],
                    dest: 'dist'
                }],
            },
        },
        posthtml: {
            options: {
                use: [
                    require('posthtml-include')()
                ]
            },
            html: {
                files: [{
                    expand: true,
                    src: ['*.html']
                }]
            }
        },
        svgstore: {
            svgstore: {
                options: {
                    includeTitleElement: false
                },
            sprite: {
                files: {
                    'dist/img/sprite.svg': ['src/images/icons/*.svg']
                }
            }}
        },
        stylus: {
            style: {
                files: {
                    'dist/css/style.css': 'src/css/style.styl'
                }
            }
        },
        csso: {
            style: {
                options:{
                    report: 'gzip'
                },
                files: {
                    'dist/css/style.min.css': ['dist/css/style.css']
                }
            }
        },
        imagemin: {
            images: {
                options: {
                    optimizationLevel: 3,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/images',
                    src: ['**/*.{png,jpg,svg}'],
                    dest: 'dist/images'
                }]
            }
        },
        cwebp: {
            images: {
                options: {
                    q: 90
                },
                files: [{
                    expand: true,
                    cwd: 'src/images',
                    src: ['**/*.{png,jpg}'],
                    dest:'dist/images'
                }]
            }
        }
    });

    grunt.registerTask('serve', ['browserSync', 'watch']);

    grunt.registerTask('build', [
        'clean',
        'copy',
        'stylus',
        'postcss',
        'csso',
        'svgstore'
    ]);
};