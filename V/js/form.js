(function ($) {
    $('.champ').each(function(){
        $(this).on('blur', function(){
            if ($(this).val().trim() != "") { // S'il y a eu une entrée clavier dans un input
                $(this).addClass('filled'); // Ajoute une classe
            }
            else {
                $(this).removeClass('filled'); // Si un champ est (devenu) vide, on enlève la classe
            }
        })
    })

    var showingpwd = 0;
	
    $('.show-password').on('click', function() { // au clic sur la classe associée
        if (showingpwd == 0) {
            $(this).next('input').attr('type','text'); // révèle le mot de passe sous forme d'un texte
            $(this).find('i').removeClass('zmdi-eye');
            $(this).find('i').addClass('zmdi-eye-off');
            showingpwd = 1;
        }
        else {
            $(this).next('input').attr('type','password'); // recache le mot de passe
            $(this).find('i').addClass('zmdi-eye');
            $(this).find('i').removeClass('zmdi-eye-off');
            showingpwd = 0;
        }
    });
	
})(jQuery);