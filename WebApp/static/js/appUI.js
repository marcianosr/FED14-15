var App = App || {}; 

(function()
{ 


App.UI = 
	{
		init:function()
		{

			this.menu.animate(); 
		}, 

		toggleSearchBar:function(el, show)
		{
			if (!show) 
			{
				el.style.display = "none"; 
			}
			else 
			{
				el.style.display = "block"; 
			}
		},

		swipeThroughActors: 
		{

			swipe:function(movies)
			{
				
				
				var self = this;


				var imgHolder = document.querySelector(".actors-container");

				var li = document.querySelector("li#actor"); 
				var liWidth = li.offsetWidth;
			
				 _.filter(movies, function(movie)
				{
						
					var scroller = new FTScroller(imgHolder, {
						
						scrollingY: false, 
						scrollingX: true,
					 
						contentWidth: movie.actors.length * (20 + liWidth)
					});

				});
				
			}, 

		},

		menu:
		{
			menuClosed:  true, 
			menuUl: document.getElementById("main"), 
			menuIcon: document.getElementById("burgerIcon"),

			animate:function()
			{
				

				var self = this;
				

				this.menuIcon.addEventListener("click", function()
				{
					console.log(self);
					if(self.menuUl.className === "closed") 
					{
						self.menuClosed = false;
						self.menuUl.classList.remove("closed");
						
					}
					else 
					{
						self.menuClosed = true; 
						self.menuUl.classList.add("closed");
						 
					}

				
				}); 
			}


		}


	}

})();