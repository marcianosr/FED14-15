var App = App || {}; 

(function()
{ 


	App.storage = 
	{
		check: function(route)
		{
			console.log('store ' + route); 
			if (localStorage.getItem(route) !== null)
			{
				console.log("localStorage: There is already someting stored")
				return true;
			}
			else 
			{
				console.log("localStorage: Hmmm... nothing stored!"); 
				return false;
			}

		},

		set: function(route, response)
		{
			localStorage.setItem(route, response);
		}

	}

})();