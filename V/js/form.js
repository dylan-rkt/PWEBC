(function ($) {
    $('.champ').each(function(){
        $(this).on('blur', function(){
            if ($(this).val().trim() != "") {
                $(this).addClass('filled');
            }
            else {
                $(this).removeClass('filled');
            }
        })    
    })

    var showingpwd = 0;
	
    $('.show-password').on('click', function(){
        if (showingpwd == 0) {
            $(this).next('input').attr('type','text');
            $(this).find('i').removeClass('zmdi-eye');
            $(this).find('i').addClass('zmdi-eye-off');
            showingpwd = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).find('i').addClass('zmdi-eye');
            $(this).find('i').removeClass('zmdi-eye-off');
            showingpwd = 0;
        }
    });
	
})(jQuery);