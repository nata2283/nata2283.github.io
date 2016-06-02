$(function(){
     
  var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-item'
  }
});
    
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});
    
    
    $.ajax({
        type: 'GET',
        url: 
        'http://api.pixplorer.co.uk/image?word=' + 'traveling' + '&amount=7?size=M',
        dataType: 'json',
        success: function(data){
            
        var arrImageurl = _.map(data.images, 'imageurl');
            
        var arrWord = _.map(data.images, 'word');
           
       $('.grid-item').each(function(i){
         
       $(this).css('backgroundImage', 'url('+arrImageurl[i]+')');
   
            $elem = arrWord[i];
        $('.word-name').innerText = $elem;
       
   });
  
       },
        error: function(){
//            // ошибка в IE8 IE9 не работает 
            console.log('Request is bad');
        }   
            
    });


$('.btn--search').on('click', function(e){
  
  var search = $('.input-search').val();
  
  
e.preventDefault();
    if(search){
        $('.input-search').val('');
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