<?php
$fnameErr = $snameErr = $lnameErr = $emailErr = $passwordErr = $birthdateErr = $countryErr = $studyErr = "hhhhh";
$regStatus = "";
$reg = 'img.php';
$hh = 'return false';
$fname = $sname = $lname = $email = $password = $y = $m = $d = $country = $study = $adress = "";
function register(){
	if($_SERVER["REQUEST_METHOD"] == "POST"){
		$fname = $_POST["fname"];
		$sname = $_POST["sname"];
		$lname = $_POST["lname"];
		$email = $_POST["email"];
		$password = $_POST["password"];
		$y = $_POST["year"];
		$m = $_POST["month"];
		$d = $_POST["day"];
		$country = $_POST["country"];
		$study = $_POST["study"];
		$adress = $_POST["adress"];
		insert_user($fname, $sname, $lname, $email, $password, $y, $m, $d, $country, $study, $adress);
	}

}
function insert_user($fname, $sname, $lname, $email, $password, $y, $m, $d, $country, $study, $adress){
	$flag = true;
	if(!name_validation($fname, $sname, $lname)){
	 	$flag = false;
	 	//echo "<script>console.log('registeration !!!');</script>";
	 }
	if(!email_validation($email)) $flag = false;
	if(!password_validation($password)) $flag = false; 
	if(!birthdate_validation($y, $m, $d)) $flag = false; 
	if(!country_validation($country)) $flag = false;
	if(!study_validation($study)) $flag = false;
	if(!$flag){
		$regStatus = "registeration failed!";
		$hh = 'return false';
		echo "<script>console.log('registeration failed!!!!!!!!!!!');</script>";
		return false;
	}

	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "ac_track";
 
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
 
	// Check connection
	if ($conn->connect_error) {
    	die("Connection failed: " . $conn->connect_error);
	} 
	$birthdate = dateFormat($y, $m, $d);
	$sql = "INSERT INTO users VALUES(null, '{$fname}', '{$sname}', '{$lname}', '{$email}', '{$password}', '{$birthdate}', '{$country}', '{$study}', null, null)";
	if ($conn->query($sql) === true){
		$regStatus = "registeration completed successfuly!";
		$hh = 'return true';
		//echo "<script>console.log('registeration successfuly!');</script>";
	} else {
		$regStatus = "registeration failed!";
		//echo "<script>console.log({$conn->connect_error});</script>";
	}
$conn->close();
}
function name_validation($n1, $n2, $n3){
	$flag = true;
	if (empty($n1)){
		$fnameErr = "First name is required!";
		//echo "<script>console.log('9');</script>";
		$flag = false;
	} else if (!preg_match("/^[a-zA-Z ]*$/", $n1)){
		$fnameErr = "only letters and white spaces are allowed!";
		echo "<script>console.log('10');</script>";
		$flag = false;
	}
	if (empty($n2)){
		$fnameErr = "Second name is required!";
		//echo "<script>console.log('11');</script>";
		$flag = false;
	} else if (!preg_match("/^[a-zA-Z ]*$/", $n2)){
		$fnameErr = "only letters and white spaces are allowed!";
		echo "<script>console.log('12');</script>";
		$flag = false;
	}
	if (empty($n3)){
		$fnameErr = "Third name is required!";
		//echo "<script>console.log('13');</script>";
		$flag = false;
	} else if (!preg_match("/^[a-zA-Z ]*$/", $n3)){
		$fnameErr = "only letters and white spaces are allowed!";
		echo "<script>console.log('14');</script>";
		$flag = false;
	}
	return $flag;
}
function email_validation($email){
	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  		$emailErr = "Invalid email format"; 
  		echo "<script>console.log('1');</script>";
  		return false;
	}
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "ac_track";
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
		echo "<script>console.log('3');</script>";
    	die("Connection failed: " . $conn->connect_error);

	} 
	$sql = "SELECT email FROM users WHERE email = '{$email}'";
	$res = $conn->query($sql);
	if($res->num_rows > 0){
		$emailErr = "this email already exist!";
		echo "<script>console.log('2');</script>";
		return false;
	}
	$conn->close();
	return true;
}
function password_validation($password){
	if(empty($password)){
		$passwordErr = "You must set a password!";
		echo "<script>console.log('4');</script>";
		return false;
	}
	if(strlen($password) < 6){
		$passwordErr = "password must be at least 6 characters";
		echo "<script>console.log('5');</script>";
		return false;
	}
	return true;
}
function birthdate_validation($y, $m, $d){
	if($y > 2004){
		$birthdateErr = "must be older than 14 years";
		echo "<script>console.log('6');</script>";
		return false;
	}
	return true;
}
function dateFormat($y, $m, $d){
	$bd = $y.'-'.$m.'-'.$d;
	echo "<script>console.log({$y}+'-'+{$m}+'-'+{$d});</script>";
	return $bd;
}
function country_validation($country){
	if(empty($country)){
		$countryErr = "Please choose a country!";
		echo "<script>console.log('7');</script>";
		return false;
	}
	return true;
}
function study_validation($study){
	if(empty($study)){
		$studyErr = "Please choose your study field";
		echo "<script>console.log('8');</script>";
		return false;
	}
	return true;
}
?>
<!DOCTYPE html>
<html>
<body>
