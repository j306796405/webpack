/**
 Gulpfile for gulp-webpack-demo
 created by Jeffery
*/

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    md5 = require('gulp-md5-plus'),
    fileinclude = require('gulp-file-include'),
    clean = require('gulp-clean'),
    base64 = require('gulp-base64');
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    browserSync = require('browser-sync').create();

//将图片拷贝到目标目录
gulp.task('copy:images', function () {
    gulp
        .src(['src/images/**/*'])
        .pipe(gulp.dest('dist/images'))
        .on('error', function(){
            console.log('images error');
        })
});

//压缩合并css, css中既有自己写的.less, 也有引入第三方库的.css
gulp.task('lessmin', function () {
    gulp.src(['src/css/main.less', 'src/css/*.css'])
        .pipe(less())
        .pipe(cssmin())
        // 转成base64
        // .pipe(base64())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css/'))
        .on('error', function(){
            console.log('lessmin error');
        })
});

//将js加上10位md5,并修改html中的引用路径，该动作依赖build-js
gulp.task('md5:js', ['build-js'], function (done) {
    gulp.src('dist/js/*.js')
        .pipe(md5(10, 'dist/page/!*.html'))
        .pipe(gulp.dest('dist/js'))
        .on('error', function(){
            console.log('md5:js');
        })
});

//将css加上10位md5，并修改html中的引用路径
gulp.task('md5:css', [], function () {
    gulp.src('dist/css/*.css')
        .pipe(md5(10, 'dist/*.html'))
        .pipe(gulp.dest('dist/css'))
        .on('error', function(){
            console.log('md5:css');
        })
});

//用于在html文件中直接include文件
gulp.task('fileinclude', function () {
    gulp.src(['src/*.html'])
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(gulp.dest('dist/'))
        .on('error', function(){
            console.log('fileinclude');
        })
});

gulp.task('clean', function () {
    gulp.src(['dist/**/*'])
        .pipe(clean());
});

gulp.task('watch', function () {
    gulp.watch('src/images/**/*', ['copy:images']);

    gulp.watch('src/css/**/*', ['lessmin']);

    gulp.watch('src/js/**/*', ['build-js']);

    gulp.watch('src/**/*.html', ['fileinclude']);
});

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

//引用webpack对js进行操作
gulp.task("build-js", ['fileinclude'], function(callback) {
    var myDevConfig = Object.create(webpackConfig);
    var devCompiler = webpack(myDevConfig);
    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-js", err);
        gutil.log("[webpack:build-js]", stats.toString({
            colors: true
        }));
        callback();
    });
});

//发布
gulp.task('default', ['fileinclude', 'md5:css', 'md5:js', 'browser-sync']);

/**
 * 开发环境
 * 1：图片拷贝
 * 2：html拷贝
 * 3：css压缩拷贝
 * 4：js webpack拷贝
 * 5：绑定监视器
 * 6：启动服务器*/
gulp.task('dev', ['copy:images', 'fileinclude', 'lessmin', 'build-js', 'watch', 'browser-sync']);