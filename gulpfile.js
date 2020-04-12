const gulp = require('gulp');
const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

function css() {
    return src('sass/**/*.scss') 
        .pipe(sass()) 
        .pipe(minifyCSS())
        .pipe(dest('css')) 
   }

function imgmin() {
    return src('image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('imageResized'))
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './',
        }
    });
    gulp.watch('./sass/**/*.scss', css).on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./image/', imgmin);
}

exports.watch = watch;