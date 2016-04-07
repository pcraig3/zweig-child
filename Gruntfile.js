module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
		    dist: {
		        src: [
                    'js/bower_components/chardin.js/chardinjs.js',
					'node_modules/sweet-scroll/sweet-scroll.js',
		            'js/back_to_top.js',
		            'js/scroll.js',
                    'js/chardin.js',
                    'js/shuffle.js'
		        ],
		        dest: 'js/build/prod.js'
			},
			search: {
				src: [
					'js/search.js'
				],
				dest: 'js/build/search.js'
			}
		},

		postcss: {
			// use browser prefixes when required
			options: {
				map: true,
				processors: [
					require('autoprefixer')(
						// https://github.com/twbs/bootstrap-sass#sass-autoprefixer
						{browsers: [
							"Android 2.3",
							"Android >= 4",
							"Chrome >= 20",
							"Firefox >= 24",
							"Explorer >= 8",
							"iOS >= 6",
							"Opera >= 12",
							"Safari >= 6"
						]}
					)
				]
			},
			dist: {
				src: 'style.css'
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'style.min.css': 'style.scss' // 'destination': 'source'
				}
			}
		},

		uglify: {
		    build: {
		    	  files: {
        			'js/build/prod.min.js': ['js/build/prod.js'],
        			'js/build/search.min.js': ['js/build/search.js']
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
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-postcss');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'postcss']);
};
