   jQuery(document).ready(function(){
        
        jQuery('#my-google').submit(function(e){
        
 var search = $('#area-search').val();
  
    e.preventDefault();
    if(search){
        $('#area-search').val('');
     $.ajax({
        type: 'GET',
        url:'http://api.pixplorer.co.uk/image?word=' + search + '&amount=7&size=L',

        dataType: 'json',
        success: function(data){

        var arrImageurl = _.map(data.images, 'imageurl');
    
        $('.grid-item').each(function(i){
     
        $(this).css('backgroundImage', 'url('+arrImageurl[i]+')');
       
   });
   
   $('.grid-item > div > p').text(search);

        },
        error: function(){
            console.log('Request is bad');
        }          
    });
  }
    
    });
 });
    function GoogleCallback (func, data) {
        window[func](data);
    }