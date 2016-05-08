module.exports = function(grunt) {

  grunt.initConfig({
  concat: {
      options: {
          separator: ';'
      },
  js: {
    src: 'js/src/*.js',
    dest: 'js/dist/script.main.js'
  },
  css: {
    src: 'css/src/*.css',
    dest: 'css/dist/style.main.css'
  }
},
 uglify: {
  js: {
    src: 'js/src/*.js',
    dest: 'js/dist/script.main.min.js'
  }
  
 },
 
    cssmin: {
      dist: {    
        src: ['css/dist/style.main.css'],
        dest: 'css/dist/style.main.min.css'
    }  
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
//  grunt.registerTask('default', 'uglify css');
  
};