﻿<?php
session_start();
header("Content-Type: application/json; charset=UTF-8");
if (!isset($_SESSION['id'])){
	echo json_encode(false);
} else {
	$arr = array();
	array_push($arr, set_img());
	array_push($arr, set_sf());
	$_SESSION['after_reg'] = false;
	echo json_encode($arr);
}


function set_img(){
	if($_POST['img_set']){
		if(isset($_FILES['file'])){
			$target = $_SERVER['DOCUMENT_ROOT'] . "/first_project/images/";
			$id = $_SESSION['id'];
			$imageFileType = strtolower(pathinfo($_FILES['file']['name'],PATHINFO_EXTENSION));
			$target_dir = $target . $id . "." . $imageFileType;
			move_uploaded_file($_FILES["file"]["tmp_name"], $target_dir);
			$servername = "localhost";
			$username = "root";
			$password = "";
			$dbname = "ac_track";
			$conn = new mysqli($servername, $username, $password, $dbname);
			if ($conn->connect_error) {
				echo "<script>console.log('3');</script>";
    			die("Connection failed: " . $conn->connect_error);
			} 
			$sql = "UPDATE users SET p_picture=1 WHERE id = '{$id}'";
			if ($conn->query($sql) === TRUE) {
				$conn->close();
   				return true;
   			} else {
   				$conn->close();
   			}
		} 
	} else {
		return true;
	}
	return false;
}
function set_sf(){
	if(isset($_POST['text'])){
		$sf = $_POST['text'];
		$id = $_SESSION['id'];
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "ac_track";
		$conn = new mysqli($servername, $username, $password, $dbname);
		if ($conn->connect_error) {
			echo "<script>console.log('3');</script>";
    		die("Connection failed: " . $conn->connect_error);
		} 
		$sql = "UPDATE users SET study_field='{$sf}' WHERE id = '{$id}'";
		if ($conn->query($sql) === TRUE) {
			$conn->close();
   			return true;
   		} else {
   			$conn->close();
   		}
	} else {
		return false;
	}
	return fales;
}
?>