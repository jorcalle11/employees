var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');

gulp.task('server', function() {
  connect.server({
    root:'./app',
    port:3000,
    hostname:'0.0.0.0',
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('./app/index.html')
  .pipe(connect.reload());
});

gulp.task('css', function() {
  gulp.src('./app/stylesheets/*.css')
  .pipe(connect.reload());
});

gulp.task('bower',function() {
  gulp.src('./app/index.html')
  .pipe(wiredep())
  .pipe(gulp.dest('./app'));
});

gulp.task('inject',function(){
    var source = gulp.src(['./app/scripts/*.js','./app/stylesheets/*.css'],{read:false});
    gulp.src('index.html', {cwd: './app'})
    .pipe(inject(source, {
        ignorePath: '/app'
    }))
    .pipe(gulp.dest('./app'));
});

gulp.task('build', function() {
  browserify({
    extensions:['.js','.jsx'],
    entries: './src/index.jsx'
  })
  .transform(babelify, {presets: ['es2015', 'react']})
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./app/scripts/'));
});

gulp.task('watch', function() {
  gulp.watch('./app/index.html',['html']);
  gulp.watch('./app/stylesheets/*.css',['css','inject']);
  gulp.watch('./src/**/*.jsx',['build','inject']);
  gulp.watch('./bower.json',['bower']);
});

gulp.task('default',['server','watch','inject']);
