(function(){

var div = document.createElement('div');
div.id = 'updiv';
div.style.position="absolute";
div.style.width="500px";
div.style.height="500px";
div.style.left="300px";
div.style.background="skyblue";
document.getElementsByTagName('body')[0].appendChild(div);
 


     for(var i=1;i<=3;i++)
     {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "radio");
    x.id="r"+i;
    x.name="radio";
    x.style.align="center";   
    div.appendChild(x);
    document.getElementById("r"+i).addEventListener("click", myfunction);
}
var div1 = document.createElement('div');
div1.id = 'render';
div1.style.position="absolute";
div1.style.top="70px";
div1.style.width="500px";
div1.style.height="400px";
div1.style.background="lightgreen";
div.appendChild(div1);

function myfunction()
{
	console.log("ok");
	var struc = "";
	//var rnd = randum();
	//ar.length = 0;
	j = 0;
	
	for (var i = 0; i <20; i++)
	 {
		struc+="<div class='sum' id='d"+i+"'>";
		struc+="<div>"+j+"</div>";
		struc+="<div>+"+j+"</div>";
		struc+="<div class='result'><input id='"+i+"' type='text'  onfocus='on(this.id)' onblur='off(this.id)'/></div></div>"
		//ar.push(rnd[j]+rnd[j+1]);
		j=j+2;
	}
	
	document.getElementById("render").innerHTML = struc;
}
 
})();