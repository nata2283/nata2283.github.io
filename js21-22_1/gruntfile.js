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
    },
    sass: {
    	dist: {
    		files: [{
    		expand: true,
    		cwd: 'styles',
    		src: ['style.scss'],
    		dest: 'styles',
    		ext: 'main.css'
    		}]
    	   }
    	 },
     watch: {
     	sass: {
     		files: ['styles/style.scss'],
     		tasks: ['sass']
     	    }
     	   }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'sass', 'watch']);

  
};