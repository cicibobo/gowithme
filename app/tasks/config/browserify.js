module.exports = function(grunt) {
  grunt.config.set('browserify', {
    dev: {
          options: {
            transform: [['babelify', {presets: ['es2015', 'react']}]]
          },
          src: ['./assets/js/app.jsx'],
          dest: '.tmp/public/js/app.js',
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
};
