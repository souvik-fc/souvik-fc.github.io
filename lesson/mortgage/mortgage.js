function on(ev)
{
    if(ev.value==ev.defaultValue)
    	{ 
    		ev.value=""; 
    		ev.style.color="#000";
    	 }
}
function off(ev)
{
    if(ev.value=="")
    	{ 
    		ev.value=ev.defaultValue;
    		 ev.style.color="#888";
        }
}



function cla_loan()
{
   var l=document.getElementById("loan").value;
   var r=document.getElementById("rate").value;
   var t=document.getElementById("time").value;
   var e=document.getElementById("emi").value;
   console.log(e);
   var R=eval(r)/100;
   	   R=R/12;
   var R1=Math.pow((1+R),eval(t));
   if(e==="RS")
   {
   	 
   	   e=l*R*R1;
   	   e=e/(R1-1);
   	   document.getElementById("emi").value=e;   
   }
   if(l==="RS")
   {
      l=(e*(R1-1))/(R*R1);
      document.getElementById("loan").value=l;   

   }
   
   if(t==="month")
   {
   	t=Math.log(e/(e-l*R))/Math.log(1+R);
   	document.getElementById("time").value=t;   
   }
}