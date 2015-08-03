<?php
$omail=$_GET['mail'];
//echo $omail;


$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname='souvik';
$conn = mysqli_connect($dbhost, $dbuser, $dbpass,$dbname);
if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}
$sql = "SELECT name,subscribe.email,phone,country,address,state,gender,interest FROM subscribe,hobby where
 subscribe.email=hobby.email and subscribe.email=$omail" ;
//echo $sql;
$result = mysqli_query($conn,$sql);

$row = mysqli_fetch_array($result);




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
            country= form1.country.options[form1.country.options.selectedIndex].value;
            indiast = form1.india.options[form1.india.options.selectedIndex].value;
            usast = form1.usa.options[form1.usa.options.selectedIndex].value;
            if(document.getElementById("male").checked){
              gender=document.getElementById("male").value;
            }
            else if(document.getElementById("female").checked){
              gender=document.getElementById("female").value;
            }
             else
             { gender="";}
            var arr = [];
           // debugger;
            if(document.getElementById("i").checked==true)
              arr.push(document.getElementById("i").value);
            if(document.getElementById("j").checked==true)
              arr.push(document.getElementById("j").value);
            if(document.getElementById("k").checked==true)
              arr.push(document.getElementById("k").value);




           
            var phone=document.getElementById("phn").value;
            var vstring="?name="+name+"&id="+1+"&email="+email+"&address="+address+"&country="+country+"&indiast="+indiast+"&usast="+usast+"&gender="+gender+"&interest="+arr+"&phone="+phone;
            //console.log(vstring);
            xmlhttp.open("GET","stmanu.php"+vstring,true);
            xmlhttp.send(null);

            

}

	</script>

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
	      <div id="div11"></div>
                <form name="form1">
                   <h1>&nbsp;&nbsp;&nbsp;&nbsp;Subcription Form</h1>
                   
                   <table align="left" cellspacing="25">

	                  <tr>
	                      <td><font size="3"> Name:</font></td>
	                      <td><input type="text" name="abc" id="abc" class="mytext" value="<?php echo $row['name'] ?>" ></td>
                          
	                      <td>
                            <span>Country</span>
                            <select id="country" class="mytext" onclick="state();" name="country">
                                <option  value="-1" ></option>
                                <option <?php if ($row['country']=='India') {
                                    echo "selected";}?>
                                     value="India" >India
                                </option>
                                <option <?php if ($row['country']=='Usa') echo "selected";?> value="Usa" >USA</option>
                            </select>
                        </td>
	                  </tr>	

	                  <tr>
	                    <td><font size="3"> Email:</font></td>
	                    <td><input type="email" name="email" class="mytext" id="email" value="<?php echo $row['email']?>" ></td>
                       <td>
                       
                            <span id="india"class="form_lebel_font ">State&nbsp;&nbsp;&nbsp;&nbsp;</span>
                             <select id="india" class="mytext" name="india" >

                               <option    <?php  if ($row['state']=='West Bengal') echo "selected";?> value="West Bengal" >West Bengal</option>
                                <option <?php if ($row['state']=='Uttar Pradesh') echo "selected";?> value="Uttar Pradesh">Uttar Pradesh</option>
                            </select>
                             <select id="nostate"  class="mytext">
                            </select>
                             <select id="usa" class="input display" name="usa" >
                                <option  <?php if ($row['state']=='California')  echo "selected";?> value="California">California</option>
                                <option <?php if ($row['state']=='Texas')  echo "selected";?> value="Texas">Texas</option>
                            </select>
                             <?php
                        if($row['country']=='India'||$row['country']=='Usa'){
                        echo "<script type='text/javascript'>state();</script>";}
                        ?>
                            
                        </td>
                       
	                    
		                
	                  </tr>	


	                  <tr>
	                    <td><font size="3"> Sex:</font></td>
	                    <td><input type="radio" value="male" id="male" name="male" <?php if ($row['gender']=='male') echo 'checked="checked"';?>>Male
	                    <input type="radio" value="female" id="female" name="male" <?php if ($row['gender']=='female') echo 'checked="checked"';?>>Female
                     <font size="3"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Address:</font></td>
                      <td><textarea rows="5" cols="33" name="address" id="address"><?php echo $row['address'];?></textarea></td>
	                    
	                    
	                    
	                  </tr>	
                      <tr>
     	                <td><font size="3">Interest:</td>
	                    <td><input type="checkbox" name="interest[]" id="i" value="football" >Football 
	    	            <input type="checkbox" name="interest[]" id="j" value="movie" >Movie
	                    <input type="checkbox" name="interest[]" id="k" value="reading" >Reading
	                    </td>
                      <td><font size="3"> phone no:</font>
                      <input type="text"  name="phn" id="phn"  class="mytext" value="<?php echo "$row[phone]"?>" ></td>
	                    
	                  </tr>	
                    </table>

                      
                       <button type="reset" value="reset" class="button1 button_attri">Reset</button>
                       <input type="button" name="Submit" value="UPDATE" class="button button_attri" onclick="ajaxfc()">
                       
               </form>
            </div>
            </div>
        </div>
</body>
</html>	


