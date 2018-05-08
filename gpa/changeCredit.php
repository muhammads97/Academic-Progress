<?php
session_start();
header("Content-Type: application/json; charset=UTF-8");
$credit = $_POST["credit"];
$semesterNumber = $_POST["SemesterNumber"];
$userID = $_SESSION["id"];
$courseNumber = $_POST["courseNumber"];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ac_track";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
	echo "<script>console.log('3');</script>";
	die("Connection failed: " . $conn->connect_error);
} 
$sql = "UPDATE courses SET credit = '{$credit}' WHERE userID = '{$userID}' AND semesterNumber = '{$semesterNumber}' AND courseNumber = '{$courseNumber}'";
$res = $conn->query($sql);
$conn->close();
echo json_encode($res);
?>