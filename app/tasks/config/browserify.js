module.exports = function(grunt) {
  grunt.config.set('browserify', {
    dev: {
          options: {
            transform: [['babelify', {presets: ['es2015', 'react']}]]
          },
          src: ['./assets/js/testApp.js'],
          dest: '.tmp/public/js/app.js',
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
};
