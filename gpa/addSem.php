﻿<?php
session_start();
header("Content-Type: application/json; charset=UTF-8");
$semesterNumber = $_POST["SemesterNumber"];
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
$sql = "INSERT INTO semesters VALUES(null, '{$userID}', '{$semesterNumber}', null)";
$res = $conn->query($sql);
$conn->close();
echo json_encode($res);
?>