var path = require('path');
var Builder = require('systemjs-builder');
var del = require('del');

var builder = new Builder('public', 'public/systemjs.config.js');

builder.bundle('app/main.js', './public/js/app/main.js', { minify: true, encodeNames: false })
    .then(function() {
        del(['./public/js/app/**/*.js', '!./public/js/app/**/{main.js,*.html,*.htm,*.css}'])
            .then(function(paths) {
                console.log('Deleted files and folders:\n', paths.join('\n'));
            });
        console.log('Build completed!');
    })
    .catch(function(err) {
        console.log('Build error!')
        console.log(err);
    });