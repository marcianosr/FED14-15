module.exports = function(grunt)
{

	grunt.initConfig({

		uglify: 
		{ 
			options: 
			{
				mangle: true, 
				compress:true, 
				sourceMap: "static/dist/app.map", 
				banner: "/* Marciano 2014 */" 
			},

			//set of files where the plugin works on, (files which we can affect with our plugins like uglify)
			// culd be dev or production 
			target: 
			{

				//be sure call it SRC here
				src: "static/js/app.js", 
				dest: "static/dist/app.min.js"
			}
		},

		requirejs: {
			  production: {
			    options: {
			      baseUrl: "static/dist/",
			      mainConfigFile: "static/js/app.js",
			      out: "static/dist/optimized.js"
			    }
			  }
			}

	});



	//load plug-ins
	grunt.loadNpmTasks('grunt-contrib-uglify'); 
	grunt.loadNpmTasks('grunt-contrib-requirejs');


};