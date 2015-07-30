<!doctype html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="tab.css">    
      
</head>
<body>
	<script type="text/javascript" src="css.js">
	</script>

    <div class="relative">
	    <div onclick="newstab()" id="tid1" class="tab border news_tab Format3"><center>News</center></div>
     
        <div onclick="subscribetab()"  id="tid2" class="tab border subscribe_tab Format3">Subscribe</div>


       
	    <div id="news" class="absolute">
       

	        <div class="div1"> 
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

	        	<?
	        	  $dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}
$sql = "SELECT name,subscribe.email,phone_no,country,address,sex,football,movie,reading FROM subscribe,interest where 
subscribe.email=interest.email and subscribe.email=mail";
if($result = mysqli_query($conn,$sql))
{
echo "gg";
}
	      $row = mysqli_fetch_array($result);

	      print_r($result);
	        	?>
	      
               <form action="data.php" method="post">
                   <h1>&nbsp;&nbsp;&nbsp;&nbsp;Subcription Form</h1>
                   
                   <table align="left" cellspacing="25">

	                  <tr>
	                      <td><font size="3"> Name:</font></td>
	                      <td><input type="text" name="abc"  class="mytext" value="<?php echo $row[name] ?>"></td>
                          
	                      <td><font size="3" > COUNTRY:</font></td>
	                      <td><select class="mytext" name="country" >
                          <option value="nepal" <?php if (isset($country) && $country=="nepal") echo "selected";?>>NEPAL</option>
                          <option value="bhutan" <?php if (isset($country) && $country=="bhutan") echo "selected";?>>BHUTAN</option>
                          <option value="mayanmar" <?php if (isset($country) && $country=="mayanmar") echo "selected";?>>MAYANMAR</option>
                       
                          </select> </td>
	
	                  </tr>	

	                  <tr>
	                    <td><font size="3"> Email:</font></td>
	                    <td><input type="email" name="email" class="mytext" id="mail" value=" <?php echo '$row[email]' ?>"></td>
                      
	                    <td><font size="3"> Address:</font></td>
	                    <td><textarea rows="5" cols="33" name="address" value="<?php echo '$row[address]' ?>"></textarea></td>
		                
	
	                  </tr>	


	                  <tr>
	                    <td><font size="3"> Sex:</font></td>
	                    <td><input type="radio" value="male" id="male" name="male" <?php if (isset($gender) && $gender=="male") echo "checked";?>>Male
	                    <input type="radio" value="female" id="female" name="male" <?php if (isset($gender) && $gender=="female") echo "checked";?>>Female</td>
	                    
	                    <td><font size="3"> phone no:</font></td>
	                    <td><input type="text"  name="phn" class="mytext" onkeypress="check(event)" value="<?php echo $phn ?>"></td>
	                    
	                  </tr>	
                      <tr>
     	                <td><font size="3">Interest:</td>
	                    <td><input type="checkbox" name="interest[]" value="football" <?php if (isset($interest[0]) && $interest[0]=="football") echo "checked";?>>Football 
	    	            <input type="checkbox" name="interest[]" value="movie" <?php if (isset($interest[1]) && $interest[1]=="movie") echo "checked";?>>Movie
	                    <input type="checkbox" name="interest[]" value="reading" <?php if (isset($interest[2]) && $interest[2]=="reading") echo "checked";?>>Reading
	                    </td>
	                  
	                  </tr>	
                    </table>

                      
                       <button type="reset" value="reset" class="button1 button_attri">Reset</button>
                       <input type="submit" value="Submit" class="button button_attri">
               </form>
            </div>
            </div>
        </div>
</body>
</html>	

