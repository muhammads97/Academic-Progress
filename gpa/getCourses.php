<?php
session_start();
header("Content-Type: application/json; charset=UTF-8");
$userID = $_SESSION["id"];
$semesterNumber = $_POST["semNum"];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ac_track";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
	echo "<script>console.log('3');</script>";
	die("Connection failed: " . $conn->connect_error);
} 
$sql = "SELECT * FROM courses WHERE userID = '{$userID}' AND semesterNumber = '{$semesterNumber}' ORDER BY courses.id";
$res = $conn->query($sql);
//echo json_encode($res);
$arr = array();
$i = 0;
while($r = $res->fetch_assoc()){
	$obj = (object)[];
	$obj->title = $r["title"];
	$obj->cn = $r["courseNumber"];
	$obj->grade = $r["grade"];
	$obj->credit = $r["credit"];
	$arr[$i] = $obj;
	$i++;
}

$conn->close();
echo json_encode($arr);
?>