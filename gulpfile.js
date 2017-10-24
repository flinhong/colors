var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    ghPages = require('gulp-gh-pages'),
    cssmin = require('gulp-clean-css'),
    jsmin = require('gulp-uglify'),
    htmlmin = require('gulp-cleanhtml'),
    prettify = require('gulp-html-prettify');

gulp.task('min-css', function(){
return gulp.src('public/**/*.css')
        .pipe(cssmin({
        level: 2
        }))
        .pipe(gulp.dest('public/'))
});

gulp.task('min-js', function(){
return gulp.src('public/**/*.js')
        .pipe(jsmin())
        .pipe(gulp.dest('public/'))
});

gulp.task('min-html', function(){
return gulp.src('public/**/*.html')
        .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
        }))
        .pipe(gulp.dest('public/'))
});

gulp.task('html-pretty', function() {
return gulp.src('public/**/*.html')
        .pipe(prettify({indent_char: ' ', indent_size: 2}))
        .pipe(gulp.dest('public/'))
});

gulp.task('gh-pages', function() {
  return gulp.src('./public/**/*')
    .pipe(ghPages());
});

gulp.task('deploy', function( callback ){
    runSequence('min-css', 'min-js', 'min-html', 'html-pretty', 'gh-pages', callback);
});