$(document).ready(function(){
     $(".submenu li").hover(function() {
     $(this).stop().animate({ backgroundColor: "#c02764"}, 400);
         console.log('this');
         
 },function() {
     $(this).stop().animate({ backgroundColor: "#ff68a4" }, 400);
     });
 });