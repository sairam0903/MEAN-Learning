'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var BROWSER_SYNC_RELOAD_DELAY = 1000;

gulp.task('default', ['browser-sync'], function () {

});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:5000",
        files: ["public/*/*.html", "public/*/*.css"],
        browser: "google chrome"
    });
});

gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({
        script: 'server.js'
    })
    .on('start', function () {
        if (!called) {
            called = true;
            cb();
        }
    })
    .on('restart', function () {
        // reload connected browsers after a slight delay
        setTimeout(function () {
            browserSync.reload({
                stream: false
            });
        }, BROWSER_SYNC_RELOAD_DELAY);
    });
});