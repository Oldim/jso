"use strict";
var gulp = require('gulp');
var sass= require('gulp-sass');
var rename = require('gulp-rename');
var cleanCSS = require("gulp-clean-css");
var browserSync = require('browser-sync').create();

var paths = {
    styles: {
      src: 'scss/**/*.scss',
      dest: 'css/'
    }
    // scripts: {
    //   src: 'src/scripts/**/*.js',
    //   dest: 'assets/scripts/'
    // }
  };

gulp.task('log', function(){
console.log("Heen Gulp nodih");
})
gulp.task('sass', function(){
    return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())    
    .pipe(rename({
        basename: 'style',
        suffix: '.min'
      }))
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(browserSync.stream());
});
gulp.task('sass:watch', function(){
    gulp.watch(paths.styles.src, ['sass'] );
});
gulp.task('serve', function(){
    browserSync.init({server: './'});
    gulp.watch(paths.styles.src, ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload);
});





