
var c=0;

function subscribetab()
         {
          document.getElementById("tid2").style.background="#E5EFFF";
          document.getElementById("tid1").style.background="none";
          document.getElementById("news").style.visibility="hidden";
          document.getElementById("subscribe").style.visibility="visible";
          document.getElementById("tid1").style.color=" #6e6e6e";
          document.getElementById("tid2").style.color="#1b6bce"

    }
          function newstab()
          {
          document.getElementById("tid1").style.background="#E5EFFF";
          document.getElementById("tid2").style.background="none";
          document.getElementById("news").style.visibility="visible";
          document.getElementById("subscribe").style.visibility="hidden";
          document.getElementById("tid1").style.color=" #1b6bce";
          document.getElementById("tid2").style.color="#6e6e6e";

    }
          function resetall()
          {
          document.getElementById("txt").innerHTML = " ";
    }
          function datas()
          {
 	      var interest=[];
 	      var ob={};
 	      ob.name=document.getElementById("name").value;
 	      ob.country=document.getElementById("country").value;
 	      ob.email=document.getElementById("email").value;
 	      ob.address=document.getElementById("address").value;
 	      if(document.getElementById("male").checked)
 		    ob.sex= document.getElementById("male").value;
 	      else if (document.getElementById("female").checked)
 		    ob.sex = document.getElementById("female").value;
      ob.phn_no=document.getElementById("phn").value;
 	      var x=document.getElementsByName("interest");
 	
 	      for(var i=0;i<x.length; i++)
 	      {

 		  if(x[i].checked===true)
 			interest.push(x[i].value);
 	   }
 	      ob.Interest=interest;
 	     // JSON.stringify(ob);
 	      console.log(ob);
    } 


        function check(event)
        {
          var x=0;  
           
          x=event.which||event.keyCode;
        // alert(c);
          
          //alert(x);
          if(c>9){
            alert("Phone numbers only have 10 Digit ");
            c--;
          }
          //debugger;
          else if(c==0)
          {
            switch(x)
            {
              case 55:c++;
              break;
               case 56:c++;
               break;
               case 57:c++;
               break; 
               case 8:c--;
               
               alert("ok");
               break;
               default:alert("put correct no");
                         
            }
          }
          else
          { switch(x)
            {
              case 8:c--;
              alert("ok");
              break;
            case 48:c++;break;
            case 49:c++;break;
            case 50:c++;break;
            case 51:c++;break;
            case 52:c++;break;
            case 53:c++;break;
            case 54:c++;break;
            case 55:c++;break;
            case 56:c++;break;
            case 57:c++;break;
            
            default:alert("put correct number");
                     c++;
          }
}
    }


    function state() {
    var selectBox = document.getElementById("country");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    if (selectedValue == "India") {

        document.getElementById("nostate").style.display = "none";
        document.getElementById("india").style.display = "inline";
        document.getElementById("usa").style.display = "none";
    } else if (selectedValue == "Usa") {
        document.getElementById("nostate").style.display = "none";
        document.getElementById("india").style.display = "none"; 
        document.getElementById("usa").style.display = "inline";
    } else if (selectedValue == -1) {
        document.getElementById("nostate").style.display = "inline";
        document.getElementById("india").style.display = "none";
        document.getElementById("usa").style.display = "none";
    }
}