'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');
const browserSync = require('browser-sync');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const pump = require('pump');


/* Dev 
================== */

/* Style */
gulp.task('dev:styles', function() {

  return gulp.src('./src/less/styles.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'))
});





/* Build 
=======================*/

/* Sync */
gulp.task('sync', function() {
  browserSync.init({
    server: {
      baseDir: './',
      routes: {
        '/price': './price.html',
        '/contacts': './contacts.html'
      }
    }
  });

  browserSync.watch('./src/css/*.css').on('change', browserSync.reload);
  browserSync.watch('./src/js/*.js').on('change', browserSync.reload);
  browserSync.watch('./*.html').on('change', browserSync.reload);
});

/* Watch */
gulp.task('watch', function() {
  gulp.watch('./src/less/**/*.less', gulp.series('dev:styles')); // watch styles
});


/* Dev */
gulp.task('dev', gulp.series(
  gulp.parallel('watch', 'sync')
));
