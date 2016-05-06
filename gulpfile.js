'use strict';

var     gulp            = require('gulp'),
        sass            = require('gulp-sass'),
        del             = require('del'),
        concat          = require('gulp-concat'),
        uglify          = require('gulp-uglify'),
        htmlreplace     = require('gulp-html-replace'),
        rename			= require('gulp-rename'),
        imagemin 		= require('gulp-imagemin'),
        plumber			= require('gulp-plumber'),
        jshint			= require('gulp-jshint'),
        livereload      = require('gulp-livereload');

var buildDir = '/var/www/html';

gulp.task('del', function(cb) {
    return del([buildDir], {force: true}, cb);
});

gulp.task('lint', function() {
		gulp.src('./app/**/*.js')
				.pipe(plumber())
				.pipe(jshint())
				.pipe(jshint.reporter('default'));
});

gulp.task('move', function() {
    gulp.src('./app/scripts/app.js')
				.pipe(plumber())
        .pipe(gulp.dest(buildDir));
	
		gulp.src('./app/scripts/core/tabletop.service.js')
			.pipe(gulp.dest(buildDir + '/core'));

		gulp.src('./app/fonts/**/*')
			.pipe(plumber())
			.pipe(gulp.dest(buildDir + '/fonts'));
	
  	gulp.src('.htaccess')
			.pipe(plumber())
			.pipe(gulp.dest(buildDir));
	
    gulp.src('./app/scripts/**/*.html')
				.pipe(plumber())
				.pipe(rename({dirname: ''}))
        .pipe(gulp.dest(buildDir + '/views/')); 
	
    gulp.src('./bower_components/angular/angular.js')
				.pipe(plumber())
        .pipe(gulp.dest(buildDir + '/bower_components/angular/'));   
	
    gulp.src('./bower_components/ng-file-upload/ng-file-upload.js')
				.pipe(plumber())
        .pipe(gulp.dest(buildDir + '/bower_components/ng-file-upload/'));   

		gulp.src('./bower_components/angular-ui-router/release/angular-ui-router.js')
				.pipe(plumber())
        .pipe(gulp.dest(buildDir + '/bower_components/angular-ui-router/release/'));
    
		gulp.src('./bower_components/angular-bootstrap/ui-bootstrap.js')
				.pipe(plumber())
        .pipe(gulp.dest(buildDir + '/bower_components/angular-bootstrap/'));
    
    gulp.src('./bower_components/lodash/lodash.js')
				.pipe(plumber())
        .pipe(gulp.dest(buildDir + '/bower_components/lodash/'));

    
    gulp.src('./app/index.html')
        .pipe(plumber())
        .pipe(htmlreplace({
            'scripts': 'js/scripts.js'
      
            //'vendorscripts': 'js/vendors.js'
        }))
        .pipe(livereload())
        .pipe(gulp.dest(buildDir));
	console.log("Move Complete");
});

gulp.task('minify', function() {
    gulp.src(['./app/scripts/app.js',
							'./app/scripts/**/*.module.js',
						 	'./app/scripts/**/*.js',
						 '!./app/scripts/vendor/**/*'])
				.pipe(plumber())
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildDir + '/js/'));

		gulp.src(['./app/scripts/vendor/sparkline.js',
							'./app/scripts/vendor/**/*'
						 ])
				.pipe(plumber())
        .pipe(livereload())
        .pipe(concat('vendors.js'))
        //.pipe(uglify())
        .pipe(gulp.dest(buildDir + '/js/'));
	
	
});

gulp.task('imageminify', function() {
	gulp.src('./app/images/**/*')
					//.pipe(imagemin({
					//		progressive: true,
					//		svgoPlugins: [{removeViewBox: false}]		
					//}))
					.pipe(plumber())
					.pipe(gulp.dest(buildDir + '/img/'));	
});

gulp.task('sass', function() {
    gulp.src('./app/styles/*.scss')
				.pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(livereload())
        .pipe(concat('sassy.css'))
				.pipe(gulp.dest('./app/styles/'));
		
		gulp.src(['./app/styles/*.css',
                  './app/scripts/**/*.css'])
				.pipe(concat('styles.css'))
        .pipe(gulp.dest(buildDir + '/css'));
});

gulp.task('watch', ['default'], function() {
    livereload.listen();
    gulp.watch('app/**/*', ['default']);
});

gulp.task('default', ['del'], function(){
    gulp.start('sass',
							 'imageminify',
                'minify',
                'move'
              );
});