const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  browserSync.watch('./css/*.css').on('change', browserSync.reload);
});