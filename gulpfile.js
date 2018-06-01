var gulp = require('gulp');
var pug = require('gulp-pug');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var inlinesource = require('gulp-inline-source');
var postcss = require('gulp-postcss');


gulp.task('html', function(){
  return gulp.src('./src/html/*.html')
    .pipe(inlinesource({compress: true}))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('styles', function(){
  return gulp.src('./src/styles/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'))

    
});

gulp.task('javascript', function(){
  return gulp.src('./src/javascript/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/js'))
});

 

 
gulp.task('watch', function () {
  gulp.watch('./src/javascript/*.js', ['javascript']);
  gulp.watch('./src/styles/**/*.scss', ['styles']);
  gulp.watch('./src/html/*.html', ['html']);
});

gulp.task('default', [ 'javascript', 'html', 'styles', 'watch' ]);