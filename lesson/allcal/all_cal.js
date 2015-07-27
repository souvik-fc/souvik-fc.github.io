(function(){

var div = document.createElement('div');
div.id = 'updiv';
div.style.position="absolute";
div.style.width="600px";
div.style.height="500px";
div.style.left="200px";
div.style.background="skyblue";
document.getElementsByTagName('body')[0].appendChild(div);
 
var radio=['Mortgage Calculator','Date-Time Calculator','Basic Calculator'];

     for(var i=0;i<3;i++)
     {
   var span=create('span',div,null,null,null,radio[i]);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "radio");
    x.id="r"+i;
    x.name="radio";
    x.style.align="center"; 
     
    span.appendChild(x);
    
}

document.getElementById("r"+0).addEventListener("click", myfunction1);
document.getElementById("r"+1).addEventListener("click", myfunction2);
document.getElementById("r"+2).addEventListener("click", myfunction3);
var div1 = document.createElement('div');
div1.id = 'render';
div1.style.position="absolute";
div1.style.top="70px";
div1.style.width="600px";
div1.style.height="500px";
div1.style.background="lightgreen";
div.appendChild(div1);

function mc()
	{
    this.label=['Loan Amount','Rate Of Interest','Number Of Month','EMI','Date/Time'];
    this.id=['loan','rate','time','emi'];
	}
function dc()
  {
     this.label=['date_1','date_2','Date Difference','time_1','time_2','Time Difference'];
     this.id=['year1','year2','dif','time1','time2','diff'];
  } 

 

 function myfunction3()
 {

 function cal()
  {
    this.id=['MC','M+','M-','MR','CLS','CAN','REM','%','7','8','9','+','4','5','6','-','1','2','3','*','.','0','=','/'];
    
  }
  var fun=[memo,memo,memo,memo,clea,cancel,opr,digit,digit,digit,digit,opr,digit,digit,digit,opr,digit,digit,digit,opr,digit,digit,equal,opr];
var memory  = "";      
   var current = "";      
  var  operation = "";      
 var   MAXLENGTH = 30; 
 var ope="";
 var mem="";




    var ca=new cal();
    if(document.getElementById('divdc')!=null)
  document.getElementById('divdc').remove();
   if(document.getElementById('divmc')!=null)
       document.getElementById('divmc').remove();

var divc=create('div',div1,{'id':'divc'},{'position':'absolute','top':'80px','width':'800px','height':'800px'},null,"");
var divcal=create('div',divc,{'id':'calculator'},{'position': 'absolute','width': '300px','height': '300px','left': '100px',
     'top':'50px',
      'background':' skyblue'},null,"");

var divtop=create('div',divcal,{'id':'top'},null,null,"");
var input=create('input',divtop,{'id':'result','value':""},{'height':'50px','width':'300px','border':'2px solid blue'},null,"");

 var key=create('div',divcal,{'id':'key'},null,null,"");

 for(var i=0;i<24;i++)
   {
    var span=create('span',key,null,null,null,"");
   
    
    var bttn=create('button',span,{'id':ca.id[i]},{'width': '50px',
            'height': '30px',
            'margin-left': '20px',
            'margin-top': '8px',
            'background':'white',
            'border-width': '2px',
            'border-style': 'solid',
            'cursor': 'pointer',
            'padding':'1%',
            'font-size': '20px',
            'border-radius': '4px'},{'click': fun[i]},ca.id[i]);
   }  

function digit(id)
{
  
   console.log(id);
  //var id=document.getElementById("1");
   if (current.length > MAXLENGTH)
       { current = "exceed"; //limit length
       } else
       { if (    (eval(current) == 0)
              && (current.indexOf(".") == -1)
            )
           { current = id;
           } else
           { current = current + id;
           }
    }
   document.getElementById("result").value = current;
}

function opr(id)            
 {

  var x=id;
  console.log(x); 
  ope="";
  if (x==="+")
   {
   if(memory===""||current==="")
   {
   operation=operation+id;
   } 
   else
   {
    operation = operation+x;
     current = eval(memory) + eval(current);
     console.log(operation);
   }
      }       //codes for *
  if (x==="-" ){if( memory===""||current===""){operation=operation+id;}else{ operation = operation+x; current = eval(memory) - eval(current);console.log(operation);} }      // slash (divide)
  if (x==="/") {if( memory===""||current===""){operation=operation+id;}else{ operation = operation+x; current = eval(memory) / eval(current);console.log(operation);} }
  if (x==="*"){if( memory===""||current===""){operation=operation+id;}else{ operation = operation+x; current = eval(memory) * eval(current);console.log(operation);} } 
   if (x==="rem"){if( memory===""||current===""){operation=operation+id;}else{ operation = operation+x; current = eval(memory) % eval(current);console.log(operation);} } 
  memory = current;
  document.getElementById("result").value = memory;                
  current = ""; 
  ope=ope+operation;
  operation="";                 
   
 }
 function equal(id)
 {
  console.log(ope);
   if(ope==="+"){ current = eval(memory) + eval(current);}
   if(ope==="-"){ current = eval(memory) - eval(current);}
   if(ope==="*"){ current = eval(memory) * eval(current);}
   if(ope==="/"){ current = eval(memory) / eval(current);}
   if(ope==="rem"){ current = eval(memory) % eval(current);}
     ope="";
     memory=current;

  document.getElementById("result").value = memory;
  memory="";
 }

 function memo(id)
 {
  if(id==="MR")
  {
    mem=current;
    console.log(mem);

  }
  if(id==="MC")
   { mem="";
 console.log(mem);
}
  if(id==="M+")
  {
    current=eval(mem)+eval(current);
    document.getElementById("result").value = current;
  }
  if(id==="M-")
  {
    current=eval(current)-eval(mem);
    document.getElementById("result").value = current;
  }
 }

 function clea(id)
 {
  console.log("ok");
  current="";
  document.getElementById("result").value =current;
 }

 function cancel(id)
 {
  var k=Math.floor(eval(current)/10);
  current=k;
  document.getElementById("result").value = k;

 }

 function rem(id)
 {
  var k=eval(current)%10;
  current=k;
  document.getElementById("result").value = k;
 }





 }









function myfunction1()
{
	
	var m=new mc();

 if(document.getElementById('divdc')!=null)
  document.getElementById('divdc').remove();

if(document.getElementById('calculator')!=null)
  document.getElementById('calculator').remove();
 
    


var divmc=create('div',div1,{'id':'divmc'},{'position':'absolute','top':'80px','width':'800px','height':'400px'},null,"");
table=create('table',divmc,{'id':'date-table'},null,null,"");
table.cellSpacing=10;

for(var i=0;i<4;i++)
{
 var tr=create('tr',table,null,null,null,"");
 var td=create('td',tr,null,null,null,m.label[i]);
 var td1=create('td',tr,null,null,null,"");
 var inp=create('input',td1,{'id':m.id[i]},null,null,"");
 
}


var btdiv=create('div',divmc,{'id':'btdiv'},null,null,"");
var bt=create('button',btdiv,{'id':'button'},{'position':'absolute','left':'170px','bottom':"200px"},{'click':calculate},"generate");

}


function myfunction2()
{
  var d=new dc;
   
    if(document.getElementById('divmc')!=null)
       document.getElementById('divmc').remove();
      if(document.getElementById('calculator')!=null)
  document.getElementById('calculator').remove();
    
  
  var divdc=create('div',div1,{'id':'divdc'},{'position':'absolute','top':'80px','width':'800px','height':'800px'},null,"");
  table=create('table',divdc,{'id':'datecal'},null,null,"");
table.cellSpacing=10;

for(var i=0;i<3;i++)
{
 var tr=create('tr',table,null,null,null,"");
 var td=create('td',tr,null,null,null,d.label[i]);
 var td1=create('td',tr,null,null,null,"");
 var inp=create('input',td1,{'id':d.id[i]},null,null,"");
   if(i===2)
   {
     var td2=create('td',tr,null,null,null,"");
     var bt=create('button',td2,{'id':'button1'},null,{'click':datedif},"difference");
   }
 
}

for(var i=3;i<6;i++)
{
 var tr=create('tr',table,null,null,null,"");
 var td=create('td',tr,null,null,null,d.label[i]);
 var td1=create('td',tr,null,null,null,"");
 var inp=create('input',td1,{'id':d.id[i]},null,null,"");

   if(i===5)
   {
     var td2=create('td',tr,null,null,null,"");
     var bt=create('button',td2,{'id':'button2'},null,{'click':timedif},"difference");
   }
   else{
   var td2=create('td',tr,null,null,null,"");
   var sel=create('select',td2,{'id':'tm'+i},null,null,"");
   var op=create('option',sel,{'value':'am'},null,null,"AM");
   var op1=create('option',sel,{'value':'pm'},null,null,"PM") ;   
  
 }
}
   var tr=create('tr',table,null,null,null,"");
 var td=create('td',tr,null,null,null,"Date/Time");
 var td1=create('td',tr,null,null,null,"");
 var inp=create('input',td1,{'id':'dt'},null,null,"");
 var td2=create('td',tr,null,null,null,"");
  var tr1=create('tr',table,null,null,null,"");
   var td3=create('td',tr1,null,null,null,"Interval");
    var td5=create('td',tr1,null,null,null,"");
 var inp=create('input',td5,{'id':'in'},null,null,"");
 var td4=create('td',tr1,null,null,null,"");
  var sel=create('select',td4,{'id':'intrvl'},null,null,"");
 var op=create('option',sel,{'value':'day'},null,null,"DAY");
   var op1=create('option',sel,{'value':'month'},null,null,"MONTH") ;   
   var op2=create('option',sel,{'value':'year'},null,null,"YEAR");
   var op3=create('option',sel,{'value':'hour'},null,null,"HOUR") ; 
   var op3=create('option',sel,{'value':'minute'},null,null,"MINUTE") ;  

   var tr3=create('tr',table,null,null,null,"");
 var td6=create('td',tr3,null,null,null,"Final");
 var td6=create('td',tr3,null,null,null,"");
 var inp=create('input',td6,{'id':'ans'},null,null,"");
 var td7=create('td',tr3,null,null,null,""); 
 var bt=create('button',td7,{'id':'button3'},null,{'click':add},"Final");
  
  

}
function add()
{
  
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


function datedif()
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
   var t1s=document.getElementById("tm3").value;
   var t2s=document.getElementById("tm4").value;
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



function calculate()
{
   var R,R1;
   var l=document.getElementById("loan").value;
   var r=document.getElementById("rate").value;
   var t=document.getElementById("time").value;
   var e=document.getElementById("emi").value;
   console.log(e);
  
       R=eval(r)/100;
       R=R/12;
   
   if(e==="RS" || e==="")
   {
       R1=Math.pow((1+R),eval(t));
       e=l*R*R1;
       e=e/(R1-1);
       document.getElementById("emi").value=e;   
   }
   if(l==="RS" || l==="")
   {
      R1=Math.pow((1+R),eval(t));
      l=(e*(R1-1))/(R*R1);
      document.getElementById("loan").value=l;   
   }
   
if(t==="month" || t==="")
   {
      t=Math.log(e/(e-l*R))/Math.log(1+R);
    document.getElementById("time").value=t;   
   }
}



function create(tag,parent,attributelist,styleobj,event1,text)
{
	var element,attr,style,ev,txt;
element=document.createElement(tag);

for(attr in attributelist)
{
element[attr]=attributelist[attr];

}
for(style in styleobj)
{
element.style[style]=styleobj[style];
}
txt=document.createTextNode(text);
element.appendChild(txt);
parent.appendChild(element);

for(ev in event1)
{
 document.getElementById(element[attr]).addEventListener(ev,event1[ev]);
}


return element;
};
 
})();