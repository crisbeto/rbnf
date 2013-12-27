var generate = require('./generate.js');

module.exports = function(grunt) {


  //generate task
  grunt.registerTask('generate', 'generate ordinal rules', function() {
    console.log('generating rule files');
    generate('rules');
  });

};