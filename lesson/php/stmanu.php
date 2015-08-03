<?php

include 'database.php';




$c=0;
//echo $_GET['email'];
$id=$_GET['id'];
//echo $id;

if (empty($_GET['name'])) {
   echo " Name is required---";
     $c=1;
   } else {

     $name = test_input($_GET["name"]);


   }
  
    if (empty($_GET["email"])) {
     echo " Email is required---";
     $c=1;
   } else {
     $email = test_input($_GET["email"]);
     // check if e-mail address is well-formed
     if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       echo " Invalid email format---";
       $c=1;
     }
   }
    
   if (empty($_GET["address"])) {
     echo " Address is required---";
     $c=1;
   } else {
     $address = test_input($_GET["address"]);
   }

   if (empty($_GET["gender"])) {
   	$c=1;
      echo " Gender is required---";
   } else {
     $gender = test_input($_GET["gender"]);
   }

   if ($_GET["country"]==-1) {
   	$c=1;
     echo " Country is required---";
   } else {
     if ($_GET["country"] == 'India') {
            $state = $_GET['indiast'];
            $country=$_GET["country"];
        } else if ($_GET["country"]== 'Usa') {
            $state = $_GET['usast'];
            $country=$_GET["country"];
        }
   }
   if (empty($_GET["interest"])) {
   	$c=1;
   echo " Interest is required---";
   } else {
     $interest = $_GET["interest"];
     
    
   }
   if (empty($_GET["phone"] ) ){
     echo " Phn no is required---";
     $c=1;
   } 
   else if( strlen($_GET["phone"]) !=10 ){
   	 echo " 10 digits number required";
   	 	$c=1;
   }else{
           $phone = test_input($_GET["phone"]);
   }
    if($c==0){
     
     $conn=database();


$pql=mysqli_query($conn, "SELECT email from subscribe where email='$email'");
 $num_rows=mysqli_num_rows($pql);
if($num_rows==0 && $id==0)
{
  
$sql = "INSERT INTO subscribe(email,name,country,state,address,gender,phone)
VALUES('$email','$name','$country','$state','$address','$gender','$phone')";
mysqli_query($conn, $sql);
$pql= "INSERT into hobby(email,interest) values ('$email','$interest')";
mysqli_query($conn, $pql);
$succ="successfully subscribe";
     echo $succ;
}
elseif($id==1)
{
  $order="UPDATE subscribe SET email='$email', name='$name',country='$country', state='$state',address='$address',gender='$gender',phone='$phone' WHERE email='$email' ";
 // var_dump($order);
  mysqli_query($conn,$order);
  $pql= "UPDATE hobby set email='$email',interest='$interest' where email='$email'";
   mysqli_query($conn,$pql);  
  echo "update successfully";
}
else{
  echo "email has already exist";
}
     
}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}

?>