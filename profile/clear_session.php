<?php
session_start();
header("Content-Type: application/json; charset=UTF-8");
session_unset();
echo json_encode($_SESSION);
?>