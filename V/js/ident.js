$(document).ready(function() {
	const blocklocker = $("#block-lock");
	const loadingCircle = $(".lds-ring");
	const form = $("#identification");

	// Lors de la soumission du formulaire
	form.on('submit', function(e) {
		e.preventDefault(); // bloque tous les événements exécutés par l'utilisateur en cas de non traitement de ces événements
		var time = 2000;
		var self = this;
		
		const login = $("input[name=login]").val();
		const pwd = $("input[name=password]").val();

		blocklocker.css("display", "block"); // affichage d'un bloc
		loadingCircle.css("display", "inline-block"); // affichage d'une animation de type chargement

		form.children("input").each(function() {
			$(this).attr("readonly", true);
		});

		window.setTimeout(function() {
			self.submit(); // Le formulaire est soumis 2 secondes après
		}, time);
	});
});