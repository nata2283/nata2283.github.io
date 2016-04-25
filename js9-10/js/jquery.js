$(document).ready(function(){
    $('.decor_checkbox').each(function(){
        var checkbox = $(this).find('input[type=checkbox]');
        if(checkbox.prop("checked")) $(this).addClass("check_active");
        if(checkbox.prop("disabled")){
            $(this).addClass("check-disable");
        }
    });
 
    // при клике по диву, делаем проверку
    $('.decor_checkbox').click(function(){
        var checkbox = $(this).find('input[type=checkbox]');
        if(checkbox.prop("checked")){
            $(this).removeClass("check_active");
            checkbox.prop("checked", false);
        }else{
            $(this).addClass("check_active");
            checkbox.prop("checked", true);
        }
        
    });
});



