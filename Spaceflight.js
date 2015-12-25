var keymap = 
{
    w:87, a:65, s:83, d:68
}

var ship = 
{
    velocity:0, direction:0
}

$(document).ready(function()
{
    $("body").on("keydown", function(event)
	{
	    console.log("TRIGGERED",event.which);
	    //rotate the ship counter-clockwise
	    if (event.which == keymap.a)
	    {
		ship.direction--;
	    }
	    
	    //rotate the ship clockwise
	    else if (event.which == keymap.d)
	    {
		ship.direction++;
	    }

	    $('.spaceship').transform("rotate",ship.direction + "deg");
	    console.log(ship.direction);
	});

});

