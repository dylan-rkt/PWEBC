<div class="block">

	<h2>Bienvenue dans le jeu Subway Rush !</h2>
	
    <div id="game" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 menu-item">
	
        <h3>Jeu</h3>
        <p>Cliquez ici pour jouer</p>
		
    </div>
	
    <div id="ranking" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 menu-item">
	
        <h3>Classement</h3>
        <p>Cliquez ici pour consulter le classement</p>
		
    </div>
	
</div>

<script>

	$("#game").click(function(){
		window.location.href = "./index.php?p=jeu";
    });  
	
	$("#ranking").click(function(){
		window.location.href = "./index.php?p=classement";
    });
	
</script>