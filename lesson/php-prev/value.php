<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}
$sql = 'SELECT name,subscribe.email,phone_no,country,address,sex,football,movie,reading FROM subscribe,interest where subscribe.email=interest.email' ;

mysql_select_db('souvik');
$retval = mysql_query( $sql, $conn );
if(! $retval )
{
  die('Could not get data: ' . mysql_error());
}
while($row = mysql_fetch_assoc($retval))
{
    echo "EMP ID :{$row['name']}  <br> ".
         "EMP NAME : {$row['email']} <br> ".
         "EMP PHN : {$row['phone_no']} <br> ".
         "EMP COUNTRY : {$row['country']} <br> ".
         "EMP ADDRESS : {$row['address']} <br> ".
         "EMP SEX : {$row['sex']} <br> ".
         "EMP INTEREST : {$row['football']} <br> ".
         "EMP INTEREST : {$row['movie']} <br> ".
         "EMP INTEREST : {$row['reading']} <br> ".
         "<a href=\"change.php?mail='$row[email]'\">Edit</a> <br>".
         "--------------------------------<br>";
} 
echo "Fetched data successfully\n";
mysql_close($conn);
?>