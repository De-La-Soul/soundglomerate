'use strict'
var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var shell = require('gulp-shell');
var mocha = require('gulp-mocha');
// var shell = require('gulp-shell');
// var chai = require('chai');
// var assert = require('assert');
// var expect = require('chai').expect; 
 


gulp.task('lint', function() {
  return gulp.src(['public/js/*.js', 'app/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


gulp.task('serverTest', function() {
  return gulp.src('test/serverSpec.js')
    .pipe(mocha());
});

gulp.task('karma', shell.task([
  'karma start'
  ]));

gulp.task('build', shell.task([
  'npm install -g karma-cli'
  ]))

gulp.task('default', function() {
  console.log('gulp is running');
});