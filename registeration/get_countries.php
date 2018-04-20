<?php
function array_of_countries(){
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "ac_track";
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
		echo "<script>console.log('3');</script>";
    	die("Connection failed: " . $conn->connect_error);

	} 
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

header("Content-Type: application/json; charset=UTF-8");
$res = array_of_countries();
echo json_encode($res);

?>