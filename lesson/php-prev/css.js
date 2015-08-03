function subscribetab()
         {
	
          document.getElementById("tid2").style.background="#E5EFFF";
          document.getElementById("tid1").style.background="none";
          document.getElementById("news").style.visibility="hidden";
          document.getElementById("subscribe").style.visibility="visible";
          document.getElementById("tid1").style.color=" #6e6e6e";
          document.getElementById("tid2").style.color="#1b6bce";

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
 	      var x=document.getElementsByName("interest");
 	
 	      for(var i=0;i<x.length; i++)
 	      {

 		  if(x[i].checked===true)
 			interest.push(x[i].value);
 	   }
 	      ob.Interest=interest;
 	      JSON.stringify(ob);
 	      console.log(ob);
    } 

  function opt(){
  
  if(document.getElementById("country").options[0].selected){
    document.getElementById("state1").style.visibility="visible";
    document.getElementById("state2").style.visibility="hidden";

  }
  else{
    document.getElementById("state1").style.visibility="hidden";
    document.getElementById("state2").style.visibility="visible";  
  }
  document.getElementById("state1_name").style.visibility="visible";
  
}
