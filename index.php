<!DOCTYPE html>
<html lang="fr">
<?php   require('V/head.tpl');  ?>
<body>
    <?php 
    if (isset($_GET['p'])) {
        $page = $_GET['p'];
    }else {
        $page = "accueil";
    } 
    switch($page){
        case 'accueil':
            require('V/header/navAccueil.tpl');
            break;
        case 'classement':
            require('V/header/navClassement.tpl');
            break;
        case 'jeu':
            require('V/header/navJeu.tpl');
            break;
        default : 
            require('V/header/navAccueil.tpl');
            break;
    }
    ?>

    <div class="row">
        <div class="col-xs-0 col-sm-0 col-md-2 col-lg-2"></div>
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <?php
                switch($page){
                    case 'jeu':
                        require('V/jeu.tpl');
                        break;
                    
                    case 'accueil':
                        require('V/accueil.tpl');
                        break;
                    case 'classement':
                        require('V/classement.tpl');
                        break;
                    default:
                        require('V/404?tpl');
                }
            ?>
        </div>
        <div class="col-xs-0 col-sm-0 col-md-2 col-lg-2"></div>
    </div>
    <footer>

    </footer>
</body>

</html>