"use strict";
var gulp = require('gulp');
var sass= require('gulp-sass');
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
    .pipe(gulp.dest(paths.styles.dest));
});
gulp.task('sass:watch', function(){
    gulp.watch(paths.styles.src, ['sass'] );
});





