<?php 

	function verif_ident($login,$pass,&$profil) {
		require('./M/connectBD.php'); 
		$sql = "SELECT * FROM utilisateur WHERE login = :login and password = :pass";
		try {
			$commande = $pdo->prepare($sql);
			$commande->bindParam(':login', $login);
			$commande->bindParam(':pass', $pass);
			$bool = $commande->execute();
			if ($bool) {
				$res = $commande->fetchAll(PDO::FETCH_ASSOC); //tableau d'enregistrements
			}
		}
		catch (PDOException $e) {
			echo utf8_encode("Echec de select : " . $e->getMessage() . "\n");
			die(); 
		}
		if (count($res)== 0) return false; 
		else{ 
			$profil= $res[0];
			return true;
		}
	}
	
?>