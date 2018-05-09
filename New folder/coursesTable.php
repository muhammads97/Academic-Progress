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
$sql = "CREATE TABLE courses (
			id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
			userID INT(6) UNSIGNED NOT NULL,
			semesterNumber INT(10) UNSIGNED NOT NULL,
			courseNumber INT(10) UNSIGNED NOT NULL,
			title VARCHAR(100),
			grade VARCHAR(5),
			credit VARCHAR(5)
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