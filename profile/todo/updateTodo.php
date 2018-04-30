<?php
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
$sql = "SELECT * FROM todo WHERE user_id = '{$userId}' AND title = '{$txt}'";
$res = $conn->query($sql);
$row = $res->fetch_assoc();
$val = $row['done'];
if($val == 0){
	$sql = "UPDATE todo SET done = 1 WHERE user_id = '{$userId}' AND title = '{$txt}'";
} else{
	$sql = "UPDATE todo SET done = 0 WHERE user_id = '{$userId}' AND title = '{$txt}'";
}
if($conn->query($sql) === true){
	$valid = true;
}
$conn->close();
echo json_encode($valid);
?>