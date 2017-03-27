
		for (var i=1; i<4; i++)
		{
			var c= document.getElementById("canvas"+i);
			var ctx = c.getContext("2d");
			ctx.beginPath();
			ctx.arc(95, 50, 40, 0, 2 * Math.PI);
			ctx.stroke();
		}