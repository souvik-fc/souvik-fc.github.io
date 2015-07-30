<?php
// define variables and set to empty values
$nameErr = $emailErr = $genderErr = $countryErr= $addressErr = $interestErr=$phnErr="";
$name = $email = $gender = $country = $address = $interest=$phn=$succ="";

$c=0;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if (empty($_POST["abc"])) {
     $nameErr = "Name is required";
     $c=1;
   } else {

     $name = test_input($_POST["abc"]);
   }
  
    if (empty($_POST["email"])) {
     $emailErr = "Email is required";
     $c=1;
   } else {
     $email = test_input($_POST["email"]);
     // check if e-mail address is well-formed
     if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $emailErr = "Invalid email format";
       $c=1;
     }
   }
    
   if (empty($_POST["address"])) {
     $addressErr = "address is required";
     $c=1;
   } else {
     $address = test_input($_POST["address"]);
   }

   if (empty($_POST["male"])) {
   	$c=1;
     $genderErr = "gender is required";
   } else {
     $gender = test_input($_POST["male"]);
   }

   if (empty($_POST["country"])) {
   	$c=1;
     $countryErr = "Gender is required";
   } else {
     $country = test_input($_POST["country"]);
    // echo $country;
   }
   if (empty($_POST["interest"])) {
   	$c=1;
     $interestErr = "interest is required";
   } else {
     $interest = $_POST["interest"];
     echo $interest[0];
   }
   if (empty($_POST["phn"] ) ){
     $phnErr = "phn no is required";
     $c=1;
   } 
   else if( strlen($_POST["phn"]) !=10 ){
   	 	$phnErr = "10 digits number required";
   	 	$c=1;
   }else{
           $phn = test_input($_POST["phn"]);
   }

   if($c===0){
   	
    

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "souvik";



// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
     
     die("Connection failed: " . mysqli_connect_error());
}

else{

   $result = mysqli_query("SELECT email FROM subscribe WHERE email = '$email'");
    
    $i=mysqli_num_rows($result);
    echo $i."<br>";
if(mysqli_num_rows($result) == null) 
  {
$sql = "INSERT INTO subscribe (email,name,country,address,sex,phone_no)
VALUES ('$email', '$name', '$country', '$address', '$gender', '$phn')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


$pql = "INSERT INTO interest (email,football,movie,reading)
VALUES ('$email','$interest[0]','$interest[1]','$interest[2]')";
 
 if (mysqli_query($conn, $pql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $pql . "<br>" . mysqli_error($conn);
}



}



}
mysqli_close($conn);


}
   	
}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}
?>





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
	      
               <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
                   <h1>&nbsp;&nbsp;&nbsp;&nbsp;Subcription Form</h1>
                   <span class="error"> <?php echo $succ;?></span>
                   <table align="left" cellspacing="25">

	                  <tr>
	                      <td><font size="3"> Name:</font></td>
	                      <td><input type="text" name="abc"  class="mytext" value="<?php echo $name ?>"></td>
                           <span class="error">* <?php echo $nameErr;?></span>
	                      <td><font size="3" > COUNTRY:</font></td>
	                      <td><select class="mytext" name="country" >
                          <option value="nepal" <?php if (isset($country) && $country=="nepal") echo "selected";?>>NEPAL</option>
                          <option value="bhutan" <?php if (isset($country) && $country=="bhutan") echo "selected";?>>BHUTAN</option>
                          <option value="mayanmar" <?php if (isset($country) && $country=="mayanmar") echo "selected";?>>MAYANMAR</option>
                          <span class="error">* <?php echo $countryErr;?></span>
                          </select> </td>
	
	                  </tr>	

	                  <tr>
	                    <td><font size="3"> Email:</font></td>
	                    <td><input type="email" name="email" class="mytext" id="mail" value=" <?php echo $email ?>"></td>
                        <span class="error">* <?php echo $emailErr;?></span>
	                    <td><font size="3"> Address:</font></td>
	                    <td><textarea rows="5" cols="33" name="address" value="<?php echo $address ?>"></textarea></td>
		                <span class="error">* <?php echo $addressErr;?></span>
	
	                  </tr>	


	                  <tr>
	                    <td><font size="3"> Sex:</font></td>
	                    <td><input type="radio" value="male" id="male" name="male" <?php if (isset($gender) && $gender=="male") echo "checked";?>>Male
	                    <input type="radio" value="female" id="female" name="male" <?php if (isset($gender) && $gender=="female") echo "checked";?>>Female</td>
	                    <span class="error">* <?php echo $genderErr;?></span>
	                    <td><font size="3"> phone no:</font></td>
	                    <td><input type="text"  name="phn" class="mytext" onkeypress="check(event)" value="<?php echo $phn ?>"></td>
	                    <span class="error">* <?php echo $phnErr;?></span>
	                  </tr>	
                      <tr>
     	                <td><font size="3">Interest:</td>
	                    <td><input type="checkbox" name="interest[]" value="football" <?php if (isset($interest[0]) && $interest[0]=="football") echo "checked";?>>Football 
	    	            <input type="checkbox" name="interest[]" value="movie" <?php if (isset($interest[1]) && $interest[1]=="movie") echo "checked";?>>Movie
	                    <input type="checkbox" name="interest[]" value="reading" <?php if (isset($interest[2]) && $interest[2]=="reading") echo "checked";?>>Reading
	                    </td>
	                    <span class="error">* <?php echo $interestErr;?></span>
	                  </tr>	
                    </table>

                      
                       <button type="reset" value="reset" class="button1 button_attri">Reset</button>
                       <input type="submit" name="Submit" value="Submit" class="button button_attri">
                       <?php if (isset($_POST['Submit'])) { echo "<script type='text/javascript'>subscribetab();</script>"; } ?>
               </form>
            </div>
            </div>
        </div>
</body>
</html>	


