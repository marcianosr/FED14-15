
var App = App || {}; 


(function()
{ 

	App.content = 
	{
		movies:
		{
			
			average:function(movies)
			{	
				
				App.helpers.forEach(movies, function(movie)
				{
						
					 var reviews = movie['reviews'];

					 //memo representeert de laatste waarde die teruggegeven wordt. De initieërende waarde is 0. 
					 var average = _.reduce(reviews, function(memo, review) { return memo + review.score / reviews.length }, 0); 
					

					 movie.average = average;

					 if(reviews.length == 0)
					 {
					 	movie.average = "N/A";
					 }


				});

			},

			input: document.getElementById("search"),
			noResults: 	document.getElementById("noResults"),
			timer: false,
			showSearchBar: false,
			noResultsMessage: 
			{
				message:''
			},
		

			results: [],

			search:function(movies)
			{
				var input = this.input; 
				
				var self = this;

				input.addEventListener("focus", function()
				{
					//verander de 'this' omgeving
					self.timer = setInterval(self.checkForKeyUp.bind(self, input, movies), 2500);
				}); 

				input.addEventListener("blur", function()
				{
					clearInterval(self.timer);
				});


			},


			checkForKeyUp: function(input, movies)
			{
				var self = this;
				this.results = []; 
				
				var filter = _.filter(movies, function(movie)
				{	
	
					if (input.value.length != 0)
					{
						var checkPattern = App.helpers.startsWith(movie.title, input.value);
						self.noResults.style.display = "none";


						if (checkPattern)
						{		
							//push the found movies
							self.results.push(movie);
							App.page.searchResult(self.results);	
							return true;
							
						}

					}

					if (input.value.length == 0)
					{
						self.noResults.style.display = "none";
						Transparency.render(document.getElementById("movies"), movies, App.controller.movieDirectives);
					}


				});


				if (input.value.length != 0)
				{
					//check of er wel iets is ingevuld zodra de search klaar is 
					if (filter.length == 0)
					{
						self.noResultsMessage.message = "Helaas, uw zoekopdracht '" + self.input.value + "' komt niet voor in onze database."
						self.noResults.style.display = "block";
						Transparency.render(self.noResults, self.noResultsMessage);
						
						return false;
		
					}


				}

			}
		}, 


		about:
		{
			title: "Movies: Al jouw films in één app",
			description: "Movies is een app gebouwd voor het vak Frontend II. Deze app dient als opstapje voor 'the next level'. Vanaf hier probeer ik verder te bouwen naar complexere apps met Javascript. Mijn leerdoelen zijn excelleren op Javascript met o.a NodeJS, MeteorJS, Angular en/of Backbone PhoneGap en Appcelerator."
		}
	}

})();	