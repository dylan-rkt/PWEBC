<!DOCTYPE HTML>
<html lang="fr">

	<head>

		<title>Crous'Finder</title>
		
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<meta name="author" content="Julien ZHANG, Dylan RAKOTOARIVELO - Groupe 201" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
			
		<link rel="icon" type="image/png" href="./V/img/crous-finder-icon.png"/>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
		<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
		<link rel="stylesheet" href="./V/style/style.css">
		<link rel="stylesheet" href="./V/style/background.css">
		<link rel="stylesheet" type="text/css" href="./V/fonts/iconic/css/material-design-iconic-font.min.css"/>
		
		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script> 
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
		<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.1.0/anime.min.js"></script>

	</head>

	<body>

		<header>

			<nav class="navbar">
			
				<div class="logo">
				
					<a href="./index.php"><img src="./V/img/crous-finder-logo.png"/></a>
					
				</div>
			
				<ul class="nav nav-pills nav-fill">
				
					<li class="nav-item">
					
						<a class="nav-link" href="#">100% fiable</a>
						
					</li>
					
				</ul>
				
			</nav>
			
		</header>
			
		<div class="background">

			<div class="container login-container">
		
				<div class="row">

					<div class="col-lg-5 login-form login-form-user">
				
						<p>
						
							<h2 class="ml9">
							
								<span class="texte">
								
									<span class="letters">Bienvenue sur Crous'Finder !</span>
								
								</span>
								
							</h2>
						
						</p>

						<br/>

						<h4>Veuillez vous identifier</h4>

						<form id="identification" class="log-in log-in-valid offset-1 col-10" action="index.php?controle=ident&action=identification" method="post">

							<div class="input-log-in input-log-in-valid">

								<input type="text" name='login' class="champ" required>
								<span class="active-input" data-placeholder="Nom"></span>
							
							</div>
							
							<div class="input-log-in input-log-in-valid">
							
								<span class="show-password">
									<i class="zmdi zmdi-eye"></i>
								</span>

								<input type="password" name='password' class="champ" required>
								<span class="active-input" data-placeholder="Mot de passe"></span>
							
							</div>
							

							<div class="form-group">
							
								<button class="btn btn-success btn-primary btnSubmit" type="submit">Se connecter</button>
							
							</div>
							
							<div id="block-lock"></div>
							
							<div class="lds-ring">
							
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								
							</div>
							
							<p class="echec"><?php echo $msg_ident ?></p>

						</form>

					</div>

					<div class="col-lg-5 offset-1 login-form login-form-user">
				
						<p>
						
							<h2 class="ml9">
							
								<span class="texte">
								
									<span class="letters">Vous êtes nouveau ?</span>
								
								</span>
								
							</h2>
						
						</p>
						
						<form id="identification" class="log-in log-in-valid offset-1 col-10" action="index.php?controle=ident&action=creation" method="post">

							<div class="input-log-in input-log-in-valid">

								<input type="text" name='nom' class="champ" required>
								<span class="active-input" data-placeholder="Nom"></span>
							
							</div>

							<div class="input-log-in input-log-in-valid">

								<input type="text" name='prenom' class="champ" required>
								<span class="active-input" data-placeholder="Prenom"></span>
							
							</div>

							<div class="input-log-in input-log-in-valid">

								<input type="text" name='login' class="champ" required>
								<span class="active-input" data-placeholder="Login"></span>
							
							</div>
							
							<div class="input-log-in input-log-in-valid">
							
								<span class="show-password">
									<i class="zmdi zmdi-eye"></i>
								</span>

								<input type="password" name='password' class="champ" required>
								<span class="active-input" data-placeholder="Mot de passe"></span>
							
							</div>
							

							<div class="form-group">
							
								<button class="btn btn-success btn-primary btnSubmit" type="submit">Se connecter</button>
							
							</div>
							
							<div id="block-lock"></div>
							
							<div class="lds-ring">
							
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								
							</div>
							
							<p class="echec"><?php echo $msg_create ?></p>

						</form>

					</div>
					
				</div>

			</div>
		
			<ul class="bubbles">
			
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				
			</ul>

		</div>
		
		<script type="text/javascript" src="./V/js/animation.js"></script>
		
		<script type="text/javascript" src="./V/js/ident.js"></script>
		
		<script src="./V/js/jquery/jquery-3.2.1.min.js"></script>

		<script src="./V/js/form.js"></script>

	</body>

</html>