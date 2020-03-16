<?php
 //fichier de controle - services de gestion des utilisateurs
// les fonctions d'un fichier de contr�le sont appel�es des actions

function identification() {
	$msg = '';
	$profil = array();
	$_SESSION['profil_utilisateur'] = '';
	$login =  isset($_POST['login']) ? ($_POST['login']) : '';
	$pass =  isset($_POST['password']) ? ($_POST['password']) : '';
	if (count($_POST) == 0) {
		require("./V/ident.html");
	} else {
		require("./M/identBD.php");
		if (!verif_ident($login, $pass, $profil)) {
			$msg = "Le login ou le mot de passe est incorrect.";
			require("./V/ident.html");
		} else {
			$_SESSION['profil_utilisateur'] = $profil;
			header("Location: index.php?controle=map&action=afficher");
		}
	}
}
