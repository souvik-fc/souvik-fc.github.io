<?php

function database()
{
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "souvik";
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
    return $conn;
}
?>