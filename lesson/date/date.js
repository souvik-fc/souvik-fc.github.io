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


function difference()
{
    var y1=document.getElementById("year1").value;
    
    var y2=document.getElementById("year2").value;
    
   var dat1 = new Date(y1);
   var dat2 = new Date(y2);

 var date1=dat1.getTime();
 console.log(date1);
 var date2=dat2.getTime();
 console.log(date2);
 var dif=date1-date2;
  console.log(dif);
 day=dif/(1000*60*60*24);
 console.log(dif);
    

var mili=dif;
var sec=dif/1000;
var min=dif/(1000*60);
var hour=dif/(1000*3600);
document.getElementById("dif").value=day+"days"+hour+"hours"+min+"minutes"+sec+"seconds";

}


function timedif()
{
   var t1=document.getElementById("time1").value;
   var t2=document.getElementById("time2").value;
   var t1s=document.getElementById("tm1").value;
   var t2s=document.getElementById("tm2").value;
    console.log(t1);
    console.log(t1s);


     var at1 = t1.split(":");
     var at2 = t2.split(":");


     if(t1s==="am")
     {
       if(at1[0]===undefined && at1[1]===undefined)
           {at1[0]=0;at1[1]=0;}
       else if(at1[0]===undefined)
                at1[0]=0;
       else (at1[1]===undefined)
              at1[1]=0;
        var min1=eval(at1[0])*60+eval(at1[1]);
    }
     else  {
        if(at1[0]===undefined && at1[1]===undefined)
          { at1[0]=0;at1[1]=0;}
       else if(at1[0]===undefined)
                at1[0]=0;
       else (at1[1]===undefined)
              at1[1]=0;

       
        var min1=(eval(at1[0])+12)*60+eval(at1[1]);
}
   
    if(t2s==="am")
    {
      if(at2[0]===undefined && at2[1]===undefined)
          { at2[0]=0;at2[1]=0;}
       else if(at2[0]===undefined)
                at2[0]=0;
       else if(at2[1]===undefined)
              at2[1]=0;
        var min2=eval(at2[0])*60+eval(at2[1]);
    }
        

     else{
        if(at2[0]===undefined && at2[1]===undefined)
           {at2[0]=0;at2[1]=0;}
       else if(at2[0]===undefined)
                at2[0]=0;
       else if(at2[1]===undefined)
              at2[1]=0;
          
        var min2=(eval(at2[0])+12)*60+eval(at2[1]);
    
}
    var min_dif=Math.abs(eval(min1)-eval(min2));
    console.log(min_dif);
       var hour=Math.floor(min_dif/60);
       var min=min_dif%60;

document.getElementById("diff").value="time diff:"+hour+"hour"+min+"minutes";

 //console.log(min1+" "+min2);
}

function add()
{
  debugger;
  var dt=document.getElementById("dt").value;
   var intr=document.getElementById("in").value;
   var sel=document.getElementById("intrvl").value;
    var d1=a=b=0;
   if(dt.indexOf("/")>-1 && sel==="day")
   {
     var newdate = new Date(dt);
     var dd = eval(newdate.getDate())+eval(intr);
     if(dd>31)
     {
      d1=dd;
       dd=dd%31;

      var a=Math.floor(eval(d1)/31);
      
     }
    var mm =eval(newdate.getMonth())+ eval(a)+1;
    if(mm>11)
    {
     
      var b=Math.floor(eval(mm)/12);
      var mm = Math.floor(eval(mm)%12);
    }
    var y = eval(newdate.getFullYear())+eval(b);
    var someFormattedDate = mm + '/' + dd + '/' + y;
    console.log(someFormattedDate);
    document.getElementById('ans').value = someFormattedDate;
   }
   if(dt.indexOf("/")>-1 && sel==="month")
   {
      var newdate = new Date(dt);
      var dd = newdate.getDate();
      var mm = eval(newdate.getMonth()) + eval(intr)+1;
      if(mm>11)
    {
      var b=Math.floor(eval(mm)/12);
      var mm = Math.floor(eval(mm)%12);
      mm=mm+1;
    }
    var y = newdate.getFullYear()+eval(b);
    var someFormattedDate = mm + '/' + dd + '/' + y;
    document.getElementById('ans').value = someFormattedDate;
   }
   if(dt.indexOf("/")>-1 && sel==="year")
   {
     var newdate = new Date(dt);
      var dd = newdate.getDate();
      var mm=newdate.getMonth()+1;
          y=newdate.getFullYear()+eval(intr);
          var someFormattedDate = mm + '/' + dd + '/' + y;
    document.getElementById('ans').value = someFormattedDate;
   }

    if(dt.indexOf(":")>-1 && sel==="hour")
    {
      var ar=dt.split(":");
      var h=eval(ar[0])+eval(intr);
        if(h>24)
        {
          h=eval(h%24);
        }
      var someFormattedDate =h+":"+ar[1];
    document.getElementById('ans').value = someFormattedDate;
    }
    if(dt.indexOf(":")>-1 && sel==="minute")
    {
      var ar=dt.split(":");
      var m=eval(ar[1])+eval(intr);
        if(m>60)
        {
          m1=m;
          m=eval(m%60);
          h=eval(ar[1])+Math.floor(eval(m/60));
        }
        
      var someFormattedDate=h+":"+m;
    document.getElementById('ans').value = someFormattedDate;
    }

}



