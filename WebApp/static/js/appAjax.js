

var App = App || {}; 


(function()
{ 

	App.ajax = 
	{
		
		trigger: function (type, url, route, success)
		{

			var req = new XMLHttpRequest();

			req.open(type, url, true);

			req.setRequestHeader('Content-type','application/json');

			type === 'POST' ? req.send(data) : req.send(null);

			req.onreadystatechange = function() 
			{
				if (req.readyState === 4) 
				{
					if (req.status === 200 || req.status === 201) 
					{


						//pass the given json response to the callback function ( succes ) with call
						success.call(JSON.parse(req.response));
						App.storage.set(route, req.response);

	
					}
				}
			};
	
		}

	};

})();