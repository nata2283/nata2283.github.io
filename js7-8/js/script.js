$(document).ready(function(){
    var tabs = $('#tabs');
    $('.tabs-content > div', tabs).each(function(i){
        if ( i != 0 ) $(this).hide(0);
    });
    tabs.on('click', '.tabs a', function(e){
        e.preventDefault();

        var tabId = $(this).attr('href');

        $('.tabs a',tabs).removeClass();
        $(this).addClass('active');

        $('.tabs-content > div', tabs).hide(0);
        $(tabId).show();
    });
});

 $(function() {
            $("li").click(function(e) {
              e.preventDefault();
              $("li").removeClass("active");
              $(this).addClass("active");
            });
        });

$(document).ready(function(){
    $('#tabs a').focus(function(){
        $(this).css("outline", "1px dotted white");
    });
    $('#tabs a').blur(function(){
        $(this).css("outline", "none");
    });
});

$(document).ready(function(){
    $('.sidebar-left a, .sidebar-right a').focus(function(){
        $(this).css("outline", "1px dotted black");
    });
    $('.sidebar-left a, .sidebar-right a').blur(function(){
        $(this).css("outline", "none");
    });
});

$( "input[type='text']" ).hover(
  function() {
      
    $(this).after("<div class='tool' >" + $(this).attr('data') + "</div>");
      
      var myTool = $('.tool');
      myTool.css({visibility:"visible"});
      myTool.animate({"left": "-=10px"}, "fast")
  }, function() {
      var myTool = $('.tool');
   $('.tool').remove();     
      
  }
);

$("#first").focusin(function(){
    var mySpan = $( this ).find( "span" );
    console.log(mySpan);
    $(mySpan).css({ display: "inline-block" });
    console.log($(mySpan));
    $(mySpan).fadeOut( 1500 );
    console.log($(mySpan));
});

$("#second").focusin(function(){
    var mySpan = $( this ).find( "span" );
    console.log(mySpan);
    $(mySpan).css({ display: "inline-block" });
    console.log($(mySpan));
    $(mySpan).fadeOut( 1500 );
    console.log($(mySpan));
});

$("#third").focusin(function(){
    var mySpan = $( this ).find( "span" );
    console.log(mySpan);
    $(mySpan).css({ display: "inline-block" });
    console.log($(mySpan));
    $(mySpan).fadeOut( 1500 );
    console.log($(mySpan));
});

$('button').hover(
function() {
     $(this).after("<div class='btn-tool' > Show help</div>");
    var btnTool = $('.btn-tool');
      btnTool.css({visibility:"visible"});
      btnTool.animate({"left": "-=10px"}, "fast")
  }, function() {
      var btnTool = $('.btn-tool');
   $('.btn-tool').remove();    
})

