var path = require('path'),
	gulp = require('gulp'),
	uglify = require('gulp-uglify'),      //js压缩
	filter = require('gulp-filter'),  
	util = require('gulp-util'),    
	changed = require('gulp-changed'),         
	less = require('gulp-less'),              //less 编译 css
	minifycss = require('gulp-minify-css'),   //压缩 css
	concat = require('gulp-concat'),          //合并文件
	webpack = require('gulp-webpack'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename');


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

gulp.task('webpacktest',function(){
	gulp.src('./client/test.js')
  	.pipe(webpack(require('./test.webpack.config.js')))
  	.pipe(gulp.dest('./server/public/javascripts/'))
});

gulp.task('compressJS', function() {
  return gulp.src('./server/public/javascripts/client.js')
    .pipe(uglify())
    .pipe(gulp.dest('./server/public/javascripts'));
});

// //合并文件
// gulp.task('concatjs', function() {
//   return gulp.src(['./client/js/jsext.js','./client/js/reactmain.js'])
//     .pipe(concat('client.js',{newLine: ';'}))
//     // .pipe(uglify())
//     .pipe(gulp.dest('./public/javascripts/'));
// });
// //

gulp.task('buildless', function () {
	console.log('================')
  return gulp.src('./client/less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'client', 'less'),path.join(__dirname, 'node_modules', 'bootstrap','less') ]
    }))
    .pipe(gulp.dest('./server/public/stylesheets/'));
});


gulp.task('buildscss', function () {
  gulp.src('./client/scss/ui.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./server/public/stylesheets/'));
});


gulp.task('watch',function(){
	gulp.watch('./client/js/**/*.js',['webpack'])
	gulp.watch('./client/jsx/**/*.jsx',['webpack'])
	gulp.watch('./client/less/**/*.less',['buildless'])
})

gulp.task('watchUI',function(){
	gulp.watch('./client/**/**/*.js',['webpacktest'])
	gulp.watch('./client/**/**/*.jsx',['webpacktest'])
	gulp.watch('./client/less/**/*.less',['buildless'])
})


gulp.task('less',['buildless','watch']);

gulp.task('default',['res','webpack','buildless','watch']);

gulp.task('test',['res','buildless','webpacktest','watchUI']);
