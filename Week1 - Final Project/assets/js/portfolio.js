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