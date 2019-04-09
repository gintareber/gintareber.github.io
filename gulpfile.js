var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('sass', function() {
	return gulp.src('style.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(gulp.dest('app'))
		.pipe(browserSync.stream());
});

gulp.task('watch',['browser-sync'], function(){
  gulp.watch('app/*.html', browserSync.reload); 
})

gulp.task('default', ['sass', 'browser-sync', 'watch'], function() {
	gulp.watch('scss/*.scss', ['sass']);
})