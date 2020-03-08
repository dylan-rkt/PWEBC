<?php
	$hostname = "localhost";
	$base= "pwebc";
	$loginBD= "root";
	$passBD="";
	$pdo=null;
		
    try {
        $pdo = new PDO("mysql:host=".$hostname.";dbname=".$base, $loginBD, $passBD,array (PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
    } catch (PDOException $e) {
        die  ("Echec de connexion : " . $e->getMessage() . "\n");
    }
?>