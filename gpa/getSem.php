<?php
session_start();
header("Content-Type: application/json; charset=UTF-8");
$userID = $_SESSION["id"];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ac_track";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
	echo "<script>console.log('3');</script>";
	die("Connection failed: " . $conn->connect_error);
} 
$sql = "SELECT * FROM semesters WHERE userID = '{$userID}'";
$res = $conn->query($sql);
//echo json_encode($res);
$arr = array();
while($r = $res->fetch_assoc()){
	$obj = (object)[];
	$obj->title = $r["title"];
	$obj->sn = $r["semesterNumber"];
	array_push($arr, $obj);
}

$conn->close();
echo json_encode($arr);
?>