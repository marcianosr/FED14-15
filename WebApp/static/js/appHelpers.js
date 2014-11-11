var App = App || {}; 

(function()
{ 

	
	App.helpers = 
	{
		forEach: function(el, action)
		{
			for( var i = 0; i < el.length; i++)
			{
				action(el[i]);
			}
		},


		prettifyUrl: function(string)
		{
			return string.split(" ").join("-");
		}, 

		startsWith:function(string, pattern)
		{
			//Old way:
			//return string.slice(0, pattern.length) == pattern;

			//Do not use search as indexOf is faster. Search is used for regexp, indexOf just for plain strings. 
			// console.log(string.search(pattern))

			if (string.toLowerCase().indexOf(pattern.toLowerCase()) != -1)
			{
				return true;
			}



		}
	}

})();