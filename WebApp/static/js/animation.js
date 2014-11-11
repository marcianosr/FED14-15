var App = App || {}; 

(function(){ 


	App.animation = 
	{	
		animationsActive : [],


		init: function()
		{
			console.log("animation script init!"); 
			console.log(App); 
		},

		start: function(animationName, delay, func)
		{
		
			this.animationsActive.push(animationName);
			console.log(this.animationsActive)
			
	
			if (arguments.length == 3)
			{
				console.log("animationName started" + animationName)
				return setInterval(func, delay); 

				console.log("animationName started" + animationName)

			}
			else 
			{
				throw new Error("Missing some arguments");
			}
			
		}, 

		stopInterval:function(animationName)
		{
			console.log("aniname: " + animationName) 
			var self = this;

			_.each(this.animationsActive, function(active)
			{
				if (animationName === active)
				{
					//check if the extact value is undefined, not the datatype
					if ( active === undefined )
					{
						return; 
					}

					console.log("Match: given name to stop is " + animationName + " while the current active is " + active)

					var find = self.animationsActive.indexOf(active); 

					console.log("Found his place in array :  " + find);

					clearInterval(active);

					//Set this to the object  :) Its pointed to the window right now 
					// Splice the array element 
					 self.animationsActive.splice(find, 1); 
					 console.log(self.animationsActive)
			
				}
				else 
				{
					//throw new Error("No animation started with the given name "  + animationName);
				}
			})
		
				
			

				
			
		}
	}

})();

App.animation.init();