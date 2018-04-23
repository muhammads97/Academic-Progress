<?php
session_start();
session_unset();
$branch = $_POST["b"];
function array_of_data(){
	
	$sql = "SELECT id, country_name FROM apps_countries";
	$result = $conn->query($sql);
	$res = array();
	if ($result->num_rows > 0) {
    	// output data of each row
    	while($row = $result->fetch_assoc()) {
        	$res[$row["id"]] = $row["country_name"];
    	}
	}
	$conn->close();
	return $res;
}
function connect(){
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "ac_track";
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
		echo "<script>console.log('3');</script>";
    	die("Connection failed: " . $conn->connect_error);
	} 
}
?>