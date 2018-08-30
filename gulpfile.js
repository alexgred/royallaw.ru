'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');
const browserSync = require('browser-sync');
const del = require('del');
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

/* js */
gulp.task('dev:js', function(cb) {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./js'));
});


/* Default
======================== */

/* html */
gulp.task('default:html', function(cb) {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./'));
});

/* fonts */
gulp.task('default:fonts', function(cb) {
  return gulp.src('./src/fonts/**')
    .pipe(gulp.dest('./fonts'));
});

/* images */
gulp.task('default:images', function(cb) {
  return gulp.src('./src/images/**')
    .pipe(gulp.dest('./images'));
});

/* bootstrap */
gulp.task('default:bootstrap', function(cb) {
  return gulp.src('./src/bootstrap/**')
    .pipe(gulp.dest('./bootstrap'));
});

/* php */
gulp.task('default:php', function(cb) {
  return gulp.src('./src/*.php')
    .pipe(gulp.dest('./'));
});


/* Clean directories 
============================*/
gulp.task('clean', function() {

  return del(['./css', './js', './*.html', './fonts', './images', './bootstrap', './*.php']);
});


/* Build 
=======================*/

/* Dev build*/
gulp.task('dev:build', gulp.series(
  'clean',
  gulp.parallel('dev:styles', 'dev:js', 'default:html', 'default:fonts', 'default:images', 'default:bootstrap', 'default:php')
));


/* Sync
===========================*/
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
  browserSync.watch('./src/*.html').on('change', browserSync.reload);
});


/* Watch
===============================*/
gulp.task('watch', function() {
  gulp.watch('./src/less/**/*.less', gulp.series('dev:styles')); // watch styles
  gulp.watch('./src/js/**/*.js', gulp.series('dev:js')); // watch js
  gulp.watch('./src/*.html', gulp.series('default:html')); // watch html
  gulp.watch('./src/images/**', gulp.series('default:images'));
});


/* Dev */
gulp.task('dev', gulp.series(
  'dev:build',
  gulp.parallel('watch', 'sync')
));
