var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var csscomb = require('gulp-csscomb');
var csso = require('gulp-csso');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

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
        .pipe(csso({restructure: false}))
        .pipe(gulpif((outputStyle === 'expanded'), csscomb()))
        .pipe(rename(filename))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'))
}

function concatJS(gulp, srcFiles, filename) {
    return gulp.src(srcFiles)
        .pipe(concat(filename))
        .pipe(gulp.dest('js/build/'));
}

gulp.task('concat', function() {
    concatJS(
        gulp,
        [
            'js/bower_components/chardin.js/chardinjs.js',
            'node_modules/sweet-scroll/sweet-scroll.js',
            'js/back_to_top.js',
            'js/scroll.js',
            'js/chardin.js',
            'js/shuffle.js'
        ],
        'prod.js'
    );
    concatJS(
        gulp, ['js/search.js'], 'search.js'
    );
});

gulp.task('compress', function() {
   return gulp.src(['js/build/prod.js', 'js/build/search.js'])
       .pipe(sourcemaps.init())
       .pipe(uglify())
       .pipe(rename({suffix: '.min'}))
       .pipe(sourcemaps.write('.'))
       .pipe(gulp.dest('js/build/'))
});

gulp.task('css', function () {
    compileSass(gulp, 'expanded', 'style.css');
    compileSass(gulp, 'compressed', 'style.min.css');
});

gulp.task('js', ['concat', 'compress']);

gulp.task('default', ['css', 'js']);

gulp.task('watch', function() {
    gulp.watch(['style.scss', 'scss/*.scss'], ['css']);
    gulp.watch(['js/**/*.js'], ['js']);
});
