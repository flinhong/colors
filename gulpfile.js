var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    cssmin = require('gulp-clean-css'),
    jsmin = require('gulp-uglify'),
    htmlmin = require('gulp-cleanhtml'),
    prettify = require('gulp-html-prettify');

gulp.task('min-css', function(){
return gulp.src('docs/**/*.css')
        .pipe(cssmin({
        level: 2
        }))
        .pipe(gulp.dest('docs/'))
});

gulp.task('min-js', function(){
return gulp.src('docs/**/*.js')
        .pipe(jsmin())
        .pipe(gulp.dest('docs/'))
});

gulp.task('min-html', function(){
return gulp.src('docs/**/*.html')
     .pipe(htmlmin({
       collapseWhitespace: true,
       removeComments: true
     }))
     .pipe(gulp.dest('docs/'))
});

gulp.task('html-pretty', function() {
return gulp.src('docs/**/*.html')
        .pipe(prettify({indent_char: ' ', indent_size: 2}))
        .pipe(gulp.dest('docs/'))
});

gulp.task('min-all', function( callback ){
    runSequence('min-css', 'min-js', 'min-html', 'html-pretty', callback);
});