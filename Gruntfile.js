module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
		    dist: {
		        src: [
		            'js/vendor/*.js', // All JS in the vendor folder
		            'js/bower_components/jquery-waypoints/*.min.js', // All JS in the libs folder
                    'js/bower_components/page-scroll-to-id/*.js',  // This specific file
                    'js/bower_components/chardin.js/chardinjs.js',  // This specific file
		            'js/back_to_top.js',
		            'js/scroll.js',
                    'js/chardin.js'
		        ],
		        dest: 'js/build/prod.js'
		    }
		},

		uglify: {
		    build: {
		    	  files: {
        			'js/build/prod.min.js': ['js/build/prod.js'],
        			'js/build/search.min.js': ['js/search.js']
      			}
		    }
		},

		watch: {
		    scripts: {
		        files: ['js/*.js'],
		        tasks: ['concat', 'uglify'],
		        options: {
		            spawn: false
		        }
		    } 
		}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify']);

};