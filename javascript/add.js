
var ar = [];

function randum()
{
	var numbers = [];
	for (var i = 0; i < 80; i++) 
	{
		var num = Math.floor(Math.random()*100);
		
			numbers.push(num);	
	}
	return numbers;
}






function addition()
{
	var struc = "";
	var rnd = randum();
	ar.length = 0;
	j = 0;
	for (var i = 0; i <20; i++)
	 {
		struc+="<div class='sum' id='d"+i+"'>";
		struc+="<div>"+rnd[j]+"</div>";
		struc+="<div>+"+rnd[j+1]+"</div>";
		struc+="<div class='result'><input id='"+i+"' type='text'  onfocus='on(this.id)' onblur='off(this.id)'/></div></div>";
		ar.push(rnd[j]+rnd[j+1]);
		j=j+2;
	}
	document.getElementById("demo").innerHTML = struc;
}

function on(ev)
{
   var o = document.getElementById(ev);
	
	
		o.style.color="green";
	
    		
}

function off(id)
{
	var o = document.getElementById(id);
	
	if(parseInt(o.value)!== ar[id])
		o.style.color="red";
	else
	    o.style.color="green";
}



function subtraction()
{
	var struc = "";
	var rnd = randum();
	ar.length = 0;
	j=0;
	for (var i = 0; i <20; i++)
	 {
		struc+="<div class='sum' id='d"+i+"'>";
		struc+="<div>"+rnd[j]+"</div>";
		struc+="<div>-"+rnd[j+1]+"</div>";
		struc+="<div class='result'><input id='"+i+"' type='text' onfocus='on(this.id)' onblur='off(this.id)'/></div></div>";
		ar.push(rnd[j]-rnd[j+1]);
		j=j+2;
	}
	document.getElementById("demo").innerHTML = struc;
}