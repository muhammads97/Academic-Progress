<!DOCTYPE html>
<html lang="en"> <head>
<meta charset="utf-8">
<title>Hello, World!</title> </head>
<body>
<?php
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
$sql = "CREATE TABLE users (
			id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
			first_name VARCHAR(30) NOT NULL,
			second_name VARCHAR(30),
			last_name VARCHAR(30) NOT NULL,
			email VARCHAR(100) NOT NULL,
			password VARCHAR(30) NOT NULL,
			birth_date DATE NOT NULL,
			country_id int(12) NOT NULL,
			study_field int(20),
			p_picture boolean,
			address VARCHAR(250)
			)";
if ($conn->query($sql) === true){
	echo "table created successfully!";
} else {
	echo "table failed";
}
$conn->close();
?>

</body>
</html>







