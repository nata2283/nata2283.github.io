$(function () {

    var flag = 0;
    $(".accord").click(function(e){
       
        if (flag == 0) {
          
            var currentAttrValue = $(this).attr('href');
            e.preventDefault();
          
            $(this).next(".block").show();
         
            $(this).addClass('active');
            flag = 1;   
           
        } else {
             $(this).next(".block").hide();
            $('.block').hide();
             e.preventDefault();
          
            $(this).removeClass('active');
            flag = 0;
        }; 
});
 
})