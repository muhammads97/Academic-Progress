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
$sql = "CREATE TABLE todo (
			id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
			user_id INT(10) UNSIGNED NOT NULL,
			title VARCHAR(100) NOT NULL,
			done BOOLEAN NOT NULL 
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