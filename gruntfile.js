module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
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
                    cwd: 'src/img',
                    src: ['**/*.{png,jpg,svg}'],
                    dest: 'dist/img'
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
                    cwd: 'src/img',
                    src: ['**/*.{png,jpg}'],
                    dest:'dist/img'
                }]
            }
        }

    })
};