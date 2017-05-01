var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

function compileSass(gulp, outputStyle, filename) {
    return gulp.src('style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: outputStyle}).on('error', sass.logError))
        .pipe(rename(filename))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'))
}

gulp.task('sass', function () {
    compileSass(gulp, 'expanded', 'style.css');
    compileSass(gulp, 'compressed', 'style.min.css');
});

gulp.task('watch', function(){
    gulp.watch(['style.scss', 'scss/*.scss'], ['sass']);
});
