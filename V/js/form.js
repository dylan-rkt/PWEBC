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

    var input = $('.input-log-in-valid .champ');

    $('.log-in-valid').on('submit',function(){
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false){
                showValidate(input[i]);
                check = false;
            }
        }
        return check;
    });


    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == ''){
                return false;
            }
        }
    }

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