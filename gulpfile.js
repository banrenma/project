var path = require('path')
var	gulp = require('gulp')
var	uglify = require('gulp-uglify')      //js压缩
var	minifycss = require('gulp-minify-css')   //压缩 css
var	webpack = require('gulp-webpack')
var	sass = require('gulp-sass')

gulp.task('res',function(){
	gulp.src(['./node_modules/jquery/dist/*.min*',])
		.pipe(gulp.dest('./server/public/third/jquery/'));

	gulp.src(['./node_modules/bootstrap/dist/css/*',])
		.pipe(gulp.dest('./server/public/third/bootstrap/css/'));

	gulp.src(['./node_modules/bootstrap/dist/fonts/*',])
		.pipe(gulp.dest('./server/public/fonts/'));

	gulp.src(['./client/scss/third/fontAwesome/fonts/*',])
		.pipe(gulp.dest('./server/public/fonts/'));	
})

//jsx 转换为js
gulp.task('webpack',function(){
	gulp.src('./client/client.js')
  	.pipe(webpack(require('./webpack.config.js')))
  	.pipe(gulp.dest('./server/public/javascripts/'));
});



gulp.task('compressJS', function() {
  return gulp.src('./server/public/javascripts/client.js')
    .pipe(uglify())
    .pipe(gulp.dest('./server/public/javascripts'));
});




gulp.task('buildscss', function () {
  gulp.src('./client/client.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./server/public/stylesheets/'));
});


gulp.task('watch',function(){
	gulp.watch('./client/**/**/*.jsx?',['webpack'])
	gulp.watch('./client/scss/**/*.scss',['buildscss'])
})




gulp.task('default',['res','webpack','buildscss','watch']);


