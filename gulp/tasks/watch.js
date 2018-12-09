var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch',function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        },
        open: false
    });

    watch('./app/index.html', function () {
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('cssInject')
        console.log('Styles are successfully generated.')

    });

    watch('./app/assets/scripts/**/*.js', function () {
        gulp.start('scriptsRefresh');
    });
});

gulp.task('cssInject',['styles'],function(){
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh',['scripts'], function(){
    browserSync.reload();
});