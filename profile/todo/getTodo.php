<?php
session_start();
header("Content-Type: application/json; charset=UTF-8");
$userId = $_SESSION["id"];
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
$sql = "SELECT * FROM todo WHERE user_id = '{$userId}'";
$res = $conn->query($sql);
$arr = array();

while($r = $res->fetch_assoc()){
	$obj = (object)[];
	$obj->txt = $r["title"];
	$obj->d = $r["done"];
	array_push($arr, $obj);
}

echo json_encode($arr);
$conn->close();
?>