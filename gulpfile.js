'use strict';

var babel = require('gulp-babel');
var metal = require('gulp-metal');
var gulp = require('gulp');

metal.registerTasks({
	testDepTasks: ['build:cjs']
});

gulp.task('build:cjs', function() {
	return compileToLib('./src/**/*.js');
});

function compileToLib(src) {
	return gulp.src(src)
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('lib'));
}
