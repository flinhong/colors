let gulp = require('gulp');
let cleancss = require('gulp-clean-css');
let uglify = require('gulp-uglify');
let pipeline = require('readable-stream').pipeline;
let htmlMin = require('gulp-htmlmin');
let prettyHtml = require('gulp-pretty-html');

gulp.task('minify-css', () => {
    return gulp.src('docs/**/*.css')
        .pipe(cleancss({
            level: 1
        }))
        .pipe(gulp.dest('docs/'))
});

gulp.task('minify-js', function () {
    return pipeline(
        gulp.src([
            'docs/**/*.js'
        ]),
        uglify({
            mangle: {
                reserved: ['user']
            }
        }),
        gulp.dest('docs/')
    )
});

gulp.task('minify-html', () => {
    return gulp.src('docs/**/*.html')
        .pipe(htmlMin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('docs/'));
});

gulp.task('pretty-html', function () {
    return gulp.src('docs/**/*.html')
        .pipe(prettyHtml({
            indent_size: 2,
            indent_char: ' ',
            unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br', 'figure']
        }))
        .pipe(gulp.dest('docs/'));
});