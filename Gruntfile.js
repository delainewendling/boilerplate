module.exports = function(grunt) {
  //Load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //Project configuration
  grunt.initConfig({
    jshint: {
      files: ['./**/*.js', '!./node_modules/**/*', '!./bower_components/**/*'],
      options: {
        jshintrc: true
      }
    },
    watch: {
      files: ['./**/*.js', '!./node_modules/**/*', '!./bower_components/**/*'],
      tasks: ['jshint']
    }
  });
};