﻿<?php
session_start();
header("Content-Type: application/json; charset=UTF-8");
$userId = $_SESSION["id"];
$txt = $_POST["t"];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ac_track";
$valid = false;
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
	echo "<script>console.log('3');</script>";
	die("Connection failed: " . $conn->connect_error);
} 
$sql = "INSERT INTO todo VALUES(null, '{$userId}', '{$txt}', 0)";
if($conn->query($sql) === true){
	$valid = true;
}
$conn->close();
echo json_encode($valid);
?>