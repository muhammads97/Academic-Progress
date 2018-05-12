<?php
session_start();
header("Content-Type: application/json; charset=UTF-8");
$res["r"] = reg($_POST);
echo json_encode($res);

function reg($arr){
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

	$sql = "INSERT INTO users VALUES(null, '{$arr["fn"]}', '{$arr["sn"]}', '{$arr["surn"]}', '{$arr["e"]}', '{$arr["p"]}', '{$arr["bd"]}', '{$arr["c"]}', null, null, null)";
	if ($conn->query($sql) === true){
		$valid = true;
		$_SESSION["after_reg"] = true;
		$sql = "SELECT * FROM users WHERE email = '{$arr["e"]}'";
		$res = $conn->query($sql);
		$row = $res->fetch_row();
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
		$valid = false;
	}
	$conn->close();
	return $valid;
}
?>