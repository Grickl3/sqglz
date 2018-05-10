var gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import');

gulp.task('default', function() {
	console.log("You are seen.");
});

gulp.task('html', function() {
	console.log("Markup found.");
});

gulp.task('styles', function() {
	// console.log("Styles found.");
	return gulp.src('./assets/styles/**/*.css')
		.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./temp/styles'));
});

gulp.task('watch', function() {

	watch('index.html', function() {
		gulp.start('html');
	});

	watch('./assets/styles/**/*.css', function() {
		gulp.start('styles');
	})
});