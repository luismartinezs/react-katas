module.exports = function (grunt) {
  grunt.initConfig({
      autoprefixer: {
          dist: {
              files: {
                  'src/style.css': 'src/style-transpiled.css'
              }
          }
      },
      watch: {
          styles: {
              files: ['src/style-transpiled.css'],
              tasks: ['autoprefixer']
          }
      }
  });
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
};