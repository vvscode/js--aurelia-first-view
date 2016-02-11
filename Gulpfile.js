var gulp = require('gulp');
var exec = require('child_process').exec;
var uglify = require('gulp-uglify');

gulp.task('bundle', function() {
  exec('aurelia bundle --force', function(err) {

  });
});

gulp.task('uglify', function() {
  return gulp.src('./wwwroot/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./wwwroot/'));
});

// Yep, I know it's strange
// but otherwise bundle rewrite file after uglify
// and I don't want to wast time to find the reason
gulp.task('default', function() {
  return exec('gulp bundle', function() {
    return exec('gulp uglify', function(){});
  });
});
