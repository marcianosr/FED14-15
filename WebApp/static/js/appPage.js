var App = App || {}; 

(function()
{ 

App.page = 
{
		loader: document.getElementById("noTrespassingOuterBarG"),
		about: function(route)
		{
			
			Transparency.render(document.getElementById(route), App.content.about);
		},

		movies: function(route, url)
		{

			var self = this;
			this.loader.style.display = "block";
			
		

				App.ajax.trigger('GET', url, route, function()
				{	
					//data from the succes callback
					var data = this; 

					App.content.movies.search(data);

					
					self.loader.style.display = "none";
					Transparency.render(document.getElementById(route), data, App.controller.movieDirectives);
				});


			
		
	
			
		},

		movie:function(route, url, id)
		{
			var self = this;
			this.loader.style.display = "block";
			App.ajax.trigger('GET', url, route, function()
			{	
				//data from the succes callback
				var data = this;
				console.log(data)

				if ( App.storage.check(route) ) 
				{	

					// console.log("dont have to call the ajax anymore" + localStorage.getItem(route));
					// data = localStorage.getItem(route);
					// console.log(JSON.parse(data));

				}

				App.content.movies.average(data);
				

				var movieData = _.filter(data, function(movie)
				{
					return App.helpers.prettifyUrl(movie.title) == id; 
				}); 
				

				self.loader.style.display = "none";
				
				App.UI.swipeThroughActors.swipe(movieData);

		
				console.log(movieData)
				Transparency.render(document.getElementById(route), movieData, App.controller.movieDirectives);
			});
		}, 

		searchResult:function(data)
		{
			// data is the array with the search results
			 Transparency.render(document.getElementById("movies"), data, App.controller.movieDirectives);
		}
	}


})();