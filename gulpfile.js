var path = require('path')
var	gulp = require('gulp')
var	uglify = require('gulp-uglify')     //js压缩
      
var	less = require('gulp-less')              //less 编译 css
var	minifycss = require('gulp-minify-css')   //压缩 css
	
var	webpack = require('gulp-webpack')



gulp.task('res',function(){
	

	gulp.src(['./client/red/fonts/*',])
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



gulp.task('buildless', function () {
	console.log('================')
  return gulp.src('./client/less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'client', 'less'),path.join(__dirname, 'node_modules', 'bootstrap','less') ]
    }))
    .pipe(gulp.dest('./server/public/stylesheets/'));
});



gulp.task('watch',function(){
	gulp.watch('./client/**/**/*.jsx?',['webpack'])
	gulp.watch('./client/less/**/*.less',['buildless'])
})





gulp.task('default',['res','webpack','buildless','watch']);


