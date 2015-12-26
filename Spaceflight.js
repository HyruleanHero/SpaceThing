var keymap = 
{
    w:87, a:65, s:83, d:68
}

var ship = 
{
    speed:0, direction:0, x:0, y:0
}

function animate()
{
    $('.spaceship').transform("rotate",ship.direction + "deg");
    var position = 
	{
	    x : Math.cos(ship.direction) * ship.speed,
	    y : Math.sin(ship.direction) * ship.speed,
	}

    ship.x += position.x;
    ship.y += position.y;
    $('.spaceship').transform("translate", ship.x + "px" , ship.y + "px" );
}

$(document).ready(function()
{
    setInterval(animate,16);

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
	    //Increase  the ship's speed
	    else if (event.which == keymap.w)
	    {
		ship.speed++;
	    }
	    //Decrease the ship's speed
	    else if (event.which == keymap.s)
	    {
		ship.speed--;
	    }

	});

});

