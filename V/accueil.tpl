<div class="block">
	<h2>Bienvenue dans le jeu Subway Rush !</h2>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 itemBox" id="boxJeu">
        <h3>Jeu</h3>
        <p>Cliquez ici pour jouer</p>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 itemBox" id="boxClassement">
        <h3>Classement</h3>
        <p>Cliquez ici pour consulter le classement</p>
    </div>
</div>
<script>
$("#boxJeu").click(function(){
    window.location.href = "./index.php?p=jeu";
    });  
$("#boxClassement").click(function(){
    window.location.href = "./index.php?p=classement";
    });
</script>