var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');
var csso = require('gulp-csso');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

function compileSass(gulp, outputStyle, filename) {
    return gulp.src('style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: outputStyle}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: [
                "Android 2.3",
                "Android >= 4",
                "Chrome >= 20",
                "Firefox >= 24",
                "Explorer >= 8",
                "iOS >= 6",
                "Opera >= 12",
                "Safari >= 6"
            ]
        }))
        .pipe(csso())
        .pipe(gulpif((outputStyle === 'expanded'), csscomb()))
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
