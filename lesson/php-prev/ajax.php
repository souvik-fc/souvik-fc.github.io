

<?
$nameErr = $emailErr = $genderErr = $countryErr= $addressErr = $interestErr=$phnErr="";
$name = $email = $gender = $country = $address = $interest=$phn=$succ="";
?>

















<!doctype html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="tab.css">    
      
</head>
<body>
	<script type="text/javascript" src="css.js">
	</script>
	<script>
function ajaxfc()
 {
  //alert("ok");
      var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("div11").innerHTML=xmlhttp.responseText;
    }
  }



  var name=document.getElementById("abc").value;
    var email=document.getElementById("email").value;
 
 var address=document.getElementById("address").value;
  var country=document.getElementById("country").value;
   if(document.getElementById("male").checked){
   	  gender=document.getElementById("male").value;
  }
  else{
    gender=document.getElementById("female").value;
  }
var interest=document.getElementById("interest[]").value;
var phone=document.getElementById("phn").value;
var vstring="?name="+name+"&email="+email+"&address="+address+"&country="+country+"&gender="+gender+"&interest="+interest+"&phone="+phone;
console.log(vstring);
xmlhttp.open("GET","stmanu.php"+vstring,true);
xmlhttp.send(null);

}

	</script>
<div id="div11"></div>
    <div class="relative">
	    <div onclick="newstab()" id="tid1" class="tab border news_tab Format3"><center>News</center></div>
     
        <div onclick="subscribetab()"  id="tid2" class="tab border subscribe_tab Format3">Subscribe</div>


       
	    <div id="news" class="absolute">
       

	        <div class="div1" id="div1"> 
	           <h1>WELCOME</h1>
               <p>Simple and effective AngularJS bindings for FusionCharts JavaScript Charting Library.Simple and effective AngularJS bindings  for  FusionCharts JavaScript Charting Library.</p>
               <p class="colour"> AngularJS bindings for FusionCharts JavaScript Charting Library</p>
               <button class="button_learn button_attri">Learn More</button>
            </div>
	        <div class="div2"> 
	       	   <h1>Latest News</h1>
	   	       <img src="image.jpg">
	        </div>
	    </div>
        <div id="subscribe" class="absolute">

	        <div class="sub"> 
	      
                <form name="form1">
                   <h1>&nbsp;&nbsp;&nbsp;&nbsp;Subcription Form</h1>
                   <span class="error"> <?php echo $succ;?></span>
                   <table align="left" cellspacing="25">

	                  <tr>
	                      <td><font size="3"> Name:</font></td>
	                      <td><input type="text" name="abc" id="abc" class="mytext" value="<?php echo $name ?>"></td>
                           <span class="error">* <?php echo $nameErr;?></span>
	                      <td><font size="3" > COUNTRY:</font></td>
	                      <td><select class="mytext" id="country" name="country">
                          <option value="nepal" <?php if (isset($country) && $country=="nepal") echo "selected";?>>NEPAL</option>
                          <option value="bhutan" <?php if (isset($country) && $country=="bhutan") echo "selected";?>>BHUTAN</option>
                          <option value="mayanmar" <?php if (isset($country) && $country=="mayanmar") echo "selected";?>>MAYANMAR</option>
                          <span class="error">* <?php echo $countryErr;?></span>
                          </select> </td>
	
	                  </tr>	

	                  <tr>
	                    <td><font size="3"> Email:</font></td>
	                    <td><input type="email" name="email" class="mytext" id="email" value=" <?php echo $email ?>"></td>
                        <span class="error">* <?php echo $emailErr;?></span>
	                    <td><font size="3"> Address:</font></td>
	                    <td><textarea rows="5" cols="33" name="address" id="address"value="<?php echo $address ?>"></textarea></td>
		                <span class="error">* <?php echo $addressErr;?></span>
	
	                  </tr>	


	                  <tr>
	                    <td><font size="3"> Sex:</font></td>
	                    <td><input type="radio" value="male" id="male" name="male" <?php if (isset($gender) && $gender=="male") echo "checked";?>>Male
	                    <input type="radio" value="female" id="female" name="male" <?php if (isset($gender) && $gender=="female") echo "checked";?>>Female</td>
	                    <span class="error">* <?php echo $genderErr;?></span>
	                    <td><font size="3"> phone no:</font></td>
	                    <td><input type="text"  name="phn" id="phn"  class="mytext" onkeypress="check(event)" value="<?php echo $phn ?>"></td>
	                    <span class="error">* <?php echo $phnErr;?></span>
	                  </tr>	
                      <tr>
     	                <td><font size="3">Interest:</td>
	                    <td><input type="checkbox" name="interest[]" id="interest[]" value="football" <?php if (isset($interest[0]) && $interest[0]=="football") echo "checked";?>>Football 
	    	            <input type="checkbox" name="interest[]" id="interest[]" value="movie" <?php if (isset($interest[1]) && $interest[1]=="movie") echo "checked";?>>Movie
	                    <input type="checkbox" name="interest[]" id="interest[]" value="reading" <?php if (isset($interest[2]) && $interest[2]=="reading") echo "checked";?>>Reading
	                    </td>
	                    <span class="error">* <?php echo $interestErr;?></span>
	                  </tr>	
                    </table>

                      
                       <button type="reset" value="reset" class="button1 button_attri">Reset</button>
                       <input type="button" name="Submit" value="Submit" class="button button_attri" onclick="ajaxfc()">
                       <?php if (isset($_POST['Submit'])) { echo "<script type='text/javascript'>subscribetab();</script>"; } ?>
               </form>
            </div>
            </div>
        </div>
</body>
</html>	

