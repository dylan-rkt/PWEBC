<?php
    function getClassement(){
        require('connect.php');
        $requete = "SELECT * FROM JOUEUR ORDER BY SCOREJOUEUR DESC, NOMBREPARTIE ASC";
        $reponse = $pdo->query($requete);
        return $reponse;
    }
    
    function getScore($pseudo){
        require('connect.php');
        $requete = "SELECT SCOREJOUEUR FROM JOUEUR WHERE NOMJOUEUR =:login";
        $temp = $pdo->prepare($requete);
        $temp->bindParam(':login', $pseudo, PDO::PARAM_STR);
        $temp->execute();
        $resultat = $temp->fetch();
        return $resultat['scoreJoueur'];
    }

    function getNbPartie($pseudo){
        require('connect.php');
        $requete = "SELECT NOMBREPARTIE FROM JOUEUR WHERE NOMJOUEUR =:login";
        $temp = $pdo->prepare($requete);
        $temp->bindParam(':login', $pseudo, PDO::PARAM_STR);
        $temp->execute();
        $resultat = $temp->fetch();
        return $resultat['nombrePartie'];
    }

    function joueurExistant($pseudo){
        require('connect.php');
        $requete = "SELECT * FROM JOUEUR WHERE NOMJOUEUR =:login";
        $temp = $pdo->prepare($requete);
        $temp->bindParam(':login', $pseudo, PDO::PARAM_STR);
        $temp->execute();
        var_dump($temp);
        if ($temp->fetch()){           
            return true;
        } 
		else {
            return false;
        }
    }
	
    function majScore($pseudo, $score){
        require('connect.php');
        $nbPartie = getNbPartie($pseudo) + 1;
        $requete = "UPDATE JOUEUR SET SCOREJOUEUR =:score,NOMBREPARTIE =:nbPartie WHERE NOMJOUEUR =:login";
        $temp = $pdo->prepare($requete);
        $temp->bindParam(':login', $pseudo, PDO::PARAM_STR);
        $temp->bindParam(':score', $score, PDO::PARAM_INT);
        $temp->bindParam(':nbPartie', $nbPartie, PDO::PARAM_INT);
        $temp->execute();
    }

    function majNbPartie($pseudo){
        require('connect.php');
        $nbPartie = intval(getNbPartie($pseudo)) + 1;
        $requete = "UPDATE JOUEUR SET NOMBREPARTIE =:nbPartie WHERE NOMJOUEUR =:login";
        $temp = $pdo->prepare($requete);
        $temp->bindParam(':login', $pseudo, PDO::PARAM_STR);
        $temp->bindParam(':nbPartie', $nbPartie, PDO::PARAM_INT);
        $temp->execute();
    }

    function créerJoueur($pseudo, $score){
        require('connect.php');
        $requete = "INSERT INTO JOUEUR(NOMJOUEUR, SCOREJOUEUR, NOMBREPARTIE) VALUES(:login, :score, 1)";
		$temp = $pdo->prepare($requete);
        $temp->bindParam(':login', $pseudo, PDO::PARAM_STR);
        $temp->bindParam(':score', $score, PDO::PARAM_INT);
        $temp->execute();
    }
	
    function listeStations($ligne){
        $file = file_get_contents('../M/metro.geojson');
        $data = json_decode($file, true);
        foreach($data["features"] as $gare => $proprietes){
            if ($proprietes["properties"]["ligne"] != $ligne)
                unset($data["features"][$gare]);
        }
        $data["features"] = array_values($data["features"]);
        file_put_contents('../M/stationsLigne.geojson', json_encode($data));
        return json_encode($data);
    }
?>