var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function(end) {
  gulp.src('./sass/style.scss')
  .pipe(sass())
  .on('error', sass.logError)
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(cleanCSS())
  .pipe(gulp.dest('./'))
  .on('end', end)

});

gulp.task('default', ['sass', 'watch']) 


gulp.task('watch', function() {
  gulp.watch('./sass/*.scss', ['sass'])
});

