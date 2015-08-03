<?php


$nameErr = $emailErr = $genderErr = $countryErr= $addressErr = $interestErr=$phnErr="";
$name = $email = $gender = $country = $address = $interest=$phn=$succ="";
$c=0;
//echo $_GET['email'];

if (empty($_GET['name'])) {
    // echo "Name is required";
     $c=1;
   } else {

     $name = test_input($_GET["name"]);


   }
  
    if (empty($_GET["email"])) {
     echo "Email is required";
     $c=1;
   } else {
     $email = test_input($_GET["email"]);
     // check if e-mail address is well-formed
     if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       echo "Invalid email format";
       $c=1;
     }
   }
    
   if (empty($_GET["address"])) {
     echo "address is required";
     $c=1;
   } else {
     $address = test_input($_GET["address"]);
   }

   if (empty($_GET["gender"])) {
   	$c=1;
      echo "gender is required";
   } else {
     $gender = test_input($_GET["gender"]);
   }

   if (empty($_GET["country"])) {
   	$c=1;
     echo "Gender is required";
   } else {
     $country = test_input($_GET["country"]);
    // echo $country;
   }
   if (empty($_GET["interest"])) {
   	$c=1;
   echo "interest is required";
   } else {
     $interest = $_GET["interest"];
     echo $interest[0];
   }
   if (empty($_GET["phone"] ) ){
     echo "phn no is required";
     $c=1;
   } 
   else if( strlen($_GET["phone"]) !=10 ){
   	 echo "10 digits number required";
   	 	$c=1;
   }else{
           $phn = test_input($_GET["phone"]);
   }
    if($c===0){
     $succ="successfully subscribe";
     $data = "$name, $email, $country, $address, $gender, $interest, $phn\n";
      $myf = fopen("/home/souvikjana/souvik-fc.github.io/lesson/php/testfile.csv", "w");
      fwrite($myf, $data);
      fclose($myf);
}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}

?>