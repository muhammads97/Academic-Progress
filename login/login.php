<?php
session_start();
header("Content-Type: application/json; charset=UTF-8");
$email = $_POST['e'];
$pw = $_POST['p'];
echo json_encode(validate_user(get_user($email), $pw));

function get_user($email){
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "ac_track";
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
		echo "<script>console.log('3');</script>";
		die("Connection failed: " . $conn->connect_error);
	} 
	$sql = "SELECT * FROM users WHERE email = '{$email}'";
	$res = $conn->query($sql);
	if($res->num_rows > 0){
		$row = $res->fetch_row();
		$conn->close();
		return $row;
	} else{
		$conn->close();
		return false;
	}
}
function validate_user($row, $pw){
	$res = array();
	if($row !== false){
		array_push($res, true);
		if($row[5] == $pw){
			array_push($res, true);
			$_SESSION['email'] = $row[4];
			$_SESSION['fn'] = $row[1];
			$_SESSION['second'] = $row[2];
			$_SESSION['sn'] = $row[3];
			$_SESSION['id'] = $row[0];
			$_SESSION['pw'] = $row[5];
			$_SESSION['sf'] = $row[8];
			$_SESSION['pp'] = $row[9];
			$_SESSION['country'] = $row[7];
			$_SESSION['bb'] = $row[6];

		} else {
			array_push($res, false);
		}
	} else {
		array_push($res, false);
		array_push($res, false);
	}
	return $res;
}
?>