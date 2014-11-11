var App = App || {}; 

(function()
{ 
	
	App.routes = 
	{
		init: function()
		{
			console.log("Route: init route");

				routie({

			    'about': function() 
			    {

			    	App.section.toggle('about');
			   
			    },

			    'movies': function()
			    {
	
			    	App.section.toggle('movies');
			    
			    },

			    'movie/:id': function(id)
			    {

			    	App.section.toggle('movie', id);
	    
			    },

			    '*':function()
			    {
			    	App.section.toggle('movies');
			    }

			});
		}

	}


})();