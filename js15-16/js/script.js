   jQuery(document).ready(function(){
        
        jQuery('#my-google').submit(function(){
        
            var urlFull = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+ encodeURIComponent(jQuery('#area-search').val()) + '&callback=GoogleCallback&context=?';
            
            jQuery.ajax({
                // AJAX-specified URL
               url: urlFull,
               dataType : "jsonp",
                  
               // Handle the success event
               success: function (data, textStatus) {
    				var ul = document.createElement("ul");
                    // build results set
                    jQuery.each(data.results,
        					function(i, val) {
                                var $element = $('img');
                                var $myForm = $('form');
                                var $inputArea = $('#area-search');
                                var $button = $('#search');
                       // $element.remove();
                              $element.css({
                                    display: 'inline-block',
                                    width: '70px',
                                    height: '30px',
                                    margin: '0 20px',
                                    float: 'left',
                              });
                              $myForm.css({
                                    
                                    width: '100%',
                                    height: '60px',
                                    margin: '0px 0 0 0',
                                    background: '#cecece',
                                    marginBottom: '30px',
                                    paddingTop: '20px',
                                  
                              });
                              $inputArea.css({
                                    width: '560px',
                                    height: '30px',
                                    margin: '0px 0 0 0',
                                    background: '#fff',
                                    float: 'left',
                                    marginRight: '10px',
                              });    
                              $button.css({
                                   
                                    margin: '0px',
                                   
                              });
        						var li = document.createElement("li");
        						
        						li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a>  "+val.content;        						
        						
        						ul.appendChild(li);
        					}
        				);
    				jQuery('#results').html(ul);
    		    }				
    		});
            return false;
        });
        
    });
    
    function GoogleCallback (func, data) {
        window[func](data);
    }