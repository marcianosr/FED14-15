// Push all to github
// Difference querySelector and getelementbyID 				| X
// WebWorkers implementation
// localStorage 											| /
// searchbar setTimeout func 								| X
// searchbar search on any word 							| X
// searchbar show 'no results' when not found anything  	| X
// searchbar search case insenstive							| X
// Hide searchbar on unnecessary pages 						| X
// Detailpagina 											| X
// Swipe through actors 									| X
// Modularity met requireJS (uitzoeken) 					| X
// GruntJS 													| X 

var App = App || {}; 


(function()
{ 	



	App.controller = 
	{

		init: function()
		{
			App.routes.init();
			App.UI.init();
	
		},

		url:"http://dennistel.nl/movies",

		movieDirectives: 
		{
			cover:
			{
				src:function(params)
				{
					return this.cover;
				},

				alt: function() 
				{	
					return this.title;
				}
			}, 


			genre: 
			{
				text: function()
				{
					return this.genres;
				
				}
			},

		
			
			directors: 
			{	
				name:function(params)
				{
					
					return "Director(s): " + this.name;

				}
			},

			movie_id: 
			{
				href: function(params)
				{

					return "#movie/" + App.helpers.prettifyUrl(this.title);
				}
			}, 

			actors:
            {
                url_photo:
                {
                    src: function()
                    {
                        return this.url_photo;
                    }
                },
              
                character:function()
                {

                	return this.character;
                }

            }

		}
		
	};

})();


