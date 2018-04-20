<?php
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_POST["x"], false);
$obj->name = $obj->name."muhammad";
echo json_encode($obj);
?>
