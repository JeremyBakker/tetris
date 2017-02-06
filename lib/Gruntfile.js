
module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		jshint: {
			files: ["../js/**/*.js"],
			options: {
				predef: ["document", "console", "$", "event", "alert", "XMLHttpRequest", "setTimeout"],
				esversion: 6, 	  //'esnext' option is deprecated, use 'esversion'
				forin: true, 	  //throws an error if you don't iterate over
							 	  //own properties
				jquery: true, 	  //makes the jquery not throw the errors
				strict: "global", //requires '"use strict";'' at global level
				undef: true,	  //throws error for variables that are left undefined
								  //at instantiation; this catches lots of typo errors
				globals: {"setInterval": true,
 						  
				}
			}
		},
		copy: {
			jquery: {
	        expand: true,
	        cwd: 'node_modules/jquery/dist',
	        src: ['jquery.min.js'],
	        dest: '../dist'
	      	}
	    },		
		sass: {
			dist: {
				files:[{
					expand: true,
					cwd: "../scss/",
					src: ["**/*.scss"],
					dest: "..css/",
					ext: ".css"
				}]
			}
		},
		watch: {
			scripts: {
				files: ["../js/**/*.js"],
				tasks: ["jshint"]
			},
			sass: {
				files: ["../sass/**/*.scss"],
				tasks: ["sass"]
			}
		},
		uglify: {
			dist: {
				files: [{
					expand: true,
					cwd: "../js/",
					src: ["**/*.js"],
					dest: "..dist/",
					ext: ".min.js",
					dot: "first"
				}]
			}
		},
		cssmin: {
			dist: {
				files: [{
					expand: true,
					cwd: "../css/",
					src: ["**/*.css"],
					dest: "..dist/",
					ext: ".min.css",
					dot: "first"
				}]
			}
		},
	});
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.registerTask('default', ['jshint', 'copy', 'sass', 'watch', 'cssmin']);
};