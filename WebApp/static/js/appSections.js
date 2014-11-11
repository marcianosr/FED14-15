
var App = App || {}; 

(function(){ 

App.section = 
	{ 
		
		toggle: function(route, id)
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
				else if ( section.getAttribute("data-route") === '')
				{
					console.log("NO ROUTE");
				}
				


			});

			
			// this refereert aan het object. Daarin verwijs je met de route naar het huidige object binnen dit object (App.section)
			// is het ID niet bekend? Stuur dan alleen de route door. Als hij wel bekend is:

			(id == undefined) ? (this[route](), console.log("No ID")) : (this[route](id), console.log("ID: " + id));

			

			if ( !App.UI.menu.menuClosed )
			{
				console.log("Menu Status: " + App.UI.menu.menuClosed)
				
				App.UI.menu.menuUl.classList.add("closed");

			}

			

		},
		
		about:function()
		{
			
			App.page.about('about', App.content.about)
			App.UI.toggleSearchBar(document.getElementById("search"), false);

		},
		
		movies:function()
		{
			App.UI.toggleSearchBar(document.getElementById("search"), true)
			App.page.movies('movies', App.controller.url)
			
		},

		movie:function(id)
		{
			App.UI.toggleSearchBar(document.getElementById("search"), false);
			App.page.movie('movie', App.controller.url, id)
		}

	};


})();