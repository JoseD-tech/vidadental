const gulp = require("gulp")
const sass = require("gulp-sass")
const autoprefixer = require("gulp-autoprefixer")

function css() {
    return gulp
        .src("scss/app.scss")
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe( gulp.dest('css') )
}

function whatchFiles() {
    gulp.watch('scss/*.scss', css)
    gulp.watch('index.html')
}

gulp.task('css', css)
gulp.task('watch',gulp.parallel(whatchFiles))

