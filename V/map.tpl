<!DOCTYPE HTML>
<html lang="fr">

	<head>

		<title>Crous'Finder</title>
		
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<meta name="author" content="Julien ZHANG, Dylan RAKOTOARIVELO - Groupe 201"/>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		
		<link rel="icon" type="image/png" href="./V/img/crous-finder-icon.png"/>
		<link rel="stylesheet" href="./V/style/map-light.css">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">
		<link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"/>
		<link rel="stylesheet" href="./V/style/leaflet-routing-machine-css/leaflet-routing-machine.css"/>

		<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
		<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
		<script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
		<script src="https://ignf.github.io/geoportal-access-lib/latest/dist/GpServices.js"></script>
		<script src="https://ignf.github.io/geoportal-access-lib/latest/dist/GpServices-src.js"></script>
		<script defer src="./V/js/overlay-menu.js"></script>
		
	</head>

	<body>

		<div id="left-side-menu" class="left-menu">
		
			<div class="pt-5 pb-3 pl-5 align-middle">
			
				<button id="afficher" type="button" class="btn btn-danger col-10">Afficher les lieux de restauration</button>
				
			</div>
			
			<div class="pt-1 pb-4 pl-5 align-middle">
			
				<a href="index.php?controle=ident&action=deconnecter"><button type="button" class="btn btn-secondary col-10">Se déconnecter</button></a>
				
			</div>
			
			<div class="pl-3 text-center">
			
				<p id="desc" class="col-12">Cliquez sur une icône pour créer un itinéraire</p>
				
				<div class="pt-1 pb-4">
				
					<p>Comment vous déplacez vous ?</p>
					
					<select id="graph">
					
						<option value="voiture">voiture</option>
						<option value="pieton">piéton</option>
						
					</select>
					
				</div>
				
				<div id="info" class="pb-5">
				
					Temps estimé : 
					
					</br>
					
					Distance :
					
				</div>
				
			</div>
			
			<div class="rapide box">
        <div class="my-4 hidden">
            <h3 class="card-header">Modes</h3>
            <div class="card-body">
                <div class="icons">
					<div class="column">
						<a href="javascript:void(0)" id="dark" onclick="darkMode()">
						<img src="./V/img/dark.png" alt="Bouton Mode sombre">
						<p>Mode nuit</p>
					  </a>
					  <script>
						function darkMode(){
						  let day_css = document.getElementById('classique');
						  if(document.getElementById('classique')){
							day_css.remove();
						  }
						  if(!document.getElementById('darkClass')){
							var lien_css = document.createElement('link');
							lien_css.href = "./V/style/map-dark.css";
							lien_css.rel = "stylesheet";
							lien_css.type = "text/css";
							lien_css.id = "darkClass"
							document.getElementsByTagName("head")[0].appendChild(lien_css);
						  }
						}
					  </script>
					</div>
					<div class="column">
					  <a href="javascript:void(0)" id="day" onclick="DayMode()">
						<img src="./V/img/day.png" alt="Bouton Mode jour">
						<p>Mode jour</p>
					  </a>
					  <script>
						function DayMode(){
						  let dark_css = document.getElementById('darkClass');
						  if(document.getElementById('darkClass')){
							dark_css.remove();
						  }
						  if(!document.getElementById('classique')){
							var lien_css = document.createElement('link');
							lien_css.href = "./V/style/map-light.css";
							lien_css.rel = "stylesheet";
							lien_css.type = "text/css";
							lien_css.id = "classique"
							document.getElementsByTagName("head")[0].appendChild(lien_css);
						  }
						}
					  </script>
					</div>
			</div>
			</div>
			</div>
			</div>
		</div>

		<img src="./V/img/arrow.svg" alt="chevron" class="arrow" id="animated-arrow" onclick="menu()"/>

		<div id="main" class="main">
		
			<div class="col-12 pl-0">
			
				<div id="mapid"></div>
				
			</div>
			
		</div>
		
		<script src="./V/js/leaflet.ajax.min.js"></script>
		
		<script src="./V/js/mapJS.js"></script>

	</body>

</html>