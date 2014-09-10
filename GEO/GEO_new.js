var GEO = GEO || {}; 

(function(){ 





	this.SANDBOX = "SANDBOX";
	this.LINEAIR = "LINEAIR";
	this.GPS_AVAILABLE = 'GPS_AVAILABLE';
	this.GPS_UNAVAILABLE = 'GPS_UNAVAILABLE';
	this.POSITION_UPDATED = 'POSITION_UPDATED';
	this.REFRESH_RATE = 1000;
	this.currentPosition = this.currentPositionMarker = this.customDebugging = this.debugId = this.map = this.interval = this.intervalCounter = this.updateMap = false;
	this.locatieRij = this.markerRij = [];



	GEO.controller =
	{

		init: function()
		{
			console.log("Init controller");
			//This refers to the function obj (controller)
			console.log(this);
			GEO.debug_mode.debug_message("Nice");
			//console.log(this.debug_mode.mode);

			GEO.events.init();
		}
	}


	GEO.events = 
	{
		
			init:function()
			{
				console.log("Init events:");
				var listeners = {} || this.listeners

				this.addListener("d", "d");

			},

			addListener: function(a, c)
			{
				console.log(typeof(this.listeners));
				//Altijd quotes gebruiken bij undefined! Typeof returnt een string 
				if (typeof(this.listeners === "undefined"))
				{
					console.log("Undefined listeners");	
					return "No listeners object available";
				}
				else 
				{
					console.log("Succes listeners"); 

					this.listeners[a].push(c);
					console.log(this.listeners); 

				}

			},

			fire: function(a)
			{
				// if ( typeof(a) == "string")
				// {
				// 	a = {type: a}
				// }

				// if (!a.type) throw Error("Event object missing 'type' property.");

			}, 

			remove: function()
			{

			}


		
	}

	GEO.map = 
	{

		generate:function()
		{

		}, 

		//GPS obj
		update_position: function()
		{

		}, 


		//GPS obj
		set_position: function()
		{

		}, 

		start_interval: function()
		{

		}, 

		calculate_distance:function()
		{

		}, 

		//GPS obj
		check_locations: function()
		{

		}
		
	}

	GEO.helpers =  
	{
		is_number: function(n)
		{
			return !isNaN(parseFloat(n)) && isFinite(n);
		}
	},



	GEO.debug_mode =
	{
		mode: true, 
		debug_message: function(message)
		{
			if ( this.mode )
			{
				console.log("message: " + message); 
				return message;
			}
			else 
			{
				console.log("Debug mode off"); 
				return false;
			}
			 
		},
		error: function(message)
		{

		}
	}

	// propertyExists: function(obj, key)
	// {
	// 	for (key in obj)
	// 	{
	// 		cons
	// 	}
	// }
	

})();

GEO.controller.init();