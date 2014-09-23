var App = App || {}; 

(function(){ 


	App.content = 
	{

		movies: [ {
					title: "HP", 
					description: "The boy who lived", 
					releaseDate: "1999",
					cover: "images_/HP1.jpg"	
				},

				{
					title: "HP2", 
					description: "The chamber of secrets", 
					releaseDate: "2001",
					cover: "images_/HP2.jpg"	
				},
				{
					title: "HP3", 
					description: "The prison", 
					releaseDate: "2002",
					cover: "images_/HP3.jpg"	
				},
				{
					title: "HP4", 
					description: "The Triwizard tournament", 
					releaseDate: "2005",
					cover: "images_/HP4.jpg"	
				} ],

		directives: 
		{
			cover:
			{
				src:function()
				{
					return this.cover;
				},
				alt: function () {
					return this.title;
				}
			} 
		},

		about: 
		{ 
			title: "Dit is een titel",
			description: "Dit is de beschrijving" 
		}

	}

	App.controller = 
	{

		init: function()
		{
			console.log("init");

			
			App.routes.init();

			App.section.init();
		
		}
	
		
	}

	App.section = 
	{
		init: function()
		{
			this.about();
			this.movies();
		
		}, 

		toggle: function(route)
		{
			var sections = document.querySelectorAll("section");

			App.helpers.forEach(sections, function(section)
			{
				if (section)
				{
					section.classList.remove("active");
				}

				if (section.getAttribute("data-route") === route)
				{
					console.log("show " + route + "!");
					section.classList.add("active");	
				}

			});
		},
		
		about:function()
		{
			Transparency.render(document.querySelectorAll("section")[0], App.content.about);
		},
		
		movies:function()
		{
			Transparency.render(document.querySelectorAll("section")[2], App.content.movies, App.content.directives);
		}

	}

	App.routes = 
	{
		init: function()
		{
			console.log("init route");

				routie({

			    'about': function() 
			    {
			    	console.log("called about");
			    	App.section.toggle('about');
			    },

			    'movies': function()
			    {
			    	console.log("on the movies");
			    	App.section.toggle('movies');
			    }

			});
		}

	}

	App.helpers = 
	{
		forEach: function(el, action)
		{
			for( var i = 0; i < el.length; i++)
			{
				action(el[i]);
			}
		},

		toObject: function(array)
		{
			var newObj = {};
			var count = 0;
			this.forEach(array, function(el)
			{	
			
				newObj[count]= el;
				count++;
			})
		
			return newObj;
		}
	}



})();

App.controller.init();

