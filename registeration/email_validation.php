<?php
header("Content-Type: application/json; charset=UTF-8");
$e = $_POST["e"];
$res['res'] = validate_email($e);
echo json_encode($res);

function validate_email($email){
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
	$sql = "SELECT email FROM users WHERE email = '{$email}'";
	$res = $conn->query($sql);
	if($res->num_rows > 0){
		$valid = false;
	} else{
		$valid = true;
	}
	$conn->close();
	return $valid;
}

?>