

<?php
$mail='';
$mail= $_GET["mail"];
echo $mail;
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "souvik";
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$delSQL = "DELETE FROM subscribe where email=$mail";
  if( mysqli_query($conn, $delSQL ) ){
    echo "perfect";
  
  	$pql="DELETE from hobby where email=$mail";
  	mysqli_query($conn, $pql );
    
   header("Location: value.php");

  }

  ?>