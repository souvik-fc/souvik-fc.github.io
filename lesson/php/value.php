<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
//$db='souvik';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}
$sql = 'SELECT name,subscribe.email,phone,country,state,address,gender,interest FROM subscribe,hobby where subscribe.email=hobby.email' ;

mysql_select_db('souvik');
$retval = mysql_query( $sql, $conn );
if(! $retval )
{
  die('Could not get data: ' . mysql_error());
}
while($row = mysql_fetch_assoc($retval))
{
    echo "NAME :{$row['name']}  <br> ".
         "EMAIL : {$row['email']} <br> ".
         "PHONE NO : {$row['phone']} <br> ".
         "COUNTRY : {$row['country']} <br> ".
         "STATE : {$row['state']} <br> ".
         "ADDRESS : {$row['address']} <br> ".
         "SEX : {$row['gender']} <br> ".
         "INTEREST : {$row['interest']} <br> ".
         "<a href=\"change.php?mail='$row[email]'\">Edit</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"delete.php?mail='$row[email]'\">Delete</a> <br>".
         "--------------------------------<br>";
} 
echo "Fetched data successfully\n";
mysql_close($conn);
?>