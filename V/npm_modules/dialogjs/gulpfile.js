// load dependencies
var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
var cssmin 		= require('gulp-cssmin');
var babel 		= require('gulp-babel');
var jshint 		= require('gulp-jshint');
var uglify		= require('gulp-uglify');
var concat 		= require('gulp-concat');
var rename 		= require('gulp-rename');
var sourcemaps 	= require('gulp-sourcemaps');
var runSequence = require('run-sequence');

// 'default' gulp task
gulp.task('default',function(){});

// 'styles' gulp task
// run sequence
gulp.task('styles',function(){
    runSequence('styles-sass');
});
gulp.task('styles-sass',function(){
    var input   = 'src/sass/*.sass';
    var output  = 'dist';
    return gulp.src(input)
    		.pipe(sass())
    		.pipe(gulp.dest(output))
    		.pipe(rename('dialog.min.css'))
    		.pipe(cssmin())
    		.pipe(gulp.dest(output));
});

// 'controllers' gulp task
gulp.task('compile',function(){
	runSequence('jshint','uglify');
});
// check for errors
gulp.task('jshint',function(){
	return gulp.src('src/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'));
});
// concat and uglify
gulp.task('uglify',function(){
	return gulp.src('src/*.js')
			.pipe(sourcemaps.init())
				.pipe(concat('dialog.js'))
				.pipe(gulp.dest('dist'))
				.pipe(rename('dialog.min.js'))
				.pipe(babel({ presets: ['es2015'] }))
				.pipe(uglify())
				.pipe(gulp.dest('dist'))
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('dist'));
});

// [*] Watch for changes
gulp.task('watch',function(){
	// watch styles
	gulp.watch('src/sass/*.sass',['styles']);
    // watch services
	gulp.watch('src/*.js',['compile']);
});

// tasks registration
gulp.task('default',[
	'styles','compile'
],function(){});