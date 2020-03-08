<?php
    if (isset($_GET['action'])) {
        $action = $_GET['action'];
    }

    if (isset($_GET['ligne'])) {
        $ligne = $_GET['ligne'];
    }

    require('../M/interact.php');
	
    switch($action){
        case 'getClassement':
            echo(getJSONClassement());
            break;
        case 'setScore':
            if (isset($_GET['pseudo']) && isset($_GET['score'])){
                $pseudo = $_GET['pseudo'];
                $score = $_GET['score'];
                insererClassement($pseudo, $score);
                return "le joueur " + $pseudo + " a pour score " + getScore($pseudo);
            }
            break;
        case 'getGEOJSON':
            echo(getGEOJSONStations($ligne));
            break;
        default:
            /* Mettre un message d'erreur */
            break;
    }
    
    function getJSONClassement(){
        $resJoueurs = getClassement();
        $tabJoueurs = array();
        foreach ($resJoueurs as $clé => $entry) {
            $obj = new stdClass();
            $obj->nomJoueur = $entry['nomJoueur'];
            $obj->scoreJoueur = $entry['scoreJoueur'];
            $obj->nombrePartie = $entry['nombrePartie'];
            array_push($tabJoueurs, $obj);
        }
        $chaineJSON = json_encode($tabJoueurs);
        echo($chaineJSON);
    }
        
    function insererClassement($pseudo, $score){
        if (joueurExistant($pseudo)) {
            if ($score <= getScore($pseudo)) {
                majNbPartie($pseudo);
            }
            else {
                majScore($pseudo, $score);
            }
        }
        else {
            créerJoueur($pseudo, $score);
        }
    }

    function getGEOJSONStations($ligne){
        return listeStations($ligne);
    } 
?>  