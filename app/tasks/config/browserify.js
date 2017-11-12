module.exports = function(grunt) {
  grunt.config.set('browserify', {
    dev: {
      options: {
        transform: [['babelify', {presets: ['es2015', 'react']}]],
        browserifyOptions: {
          debug: true,
          extensions: ['.jsx']
        }
      },
      src: ['./assets/js/app.jsx'],
      dest: '.tmp/public/js/app.js',
    }
  });
  grunt.loadNpmTasks('grunt-browserify');
};
