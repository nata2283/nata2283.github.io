$(function() {
    var html = $('#homework').html();
   // console.log(tmpl);
    var myInfo = {
            fio: 'Ландик Наталья Алексеевна',
            photo: 'img/face.png',
            course: 'Студент курса GoForIT Online',
            learn: 'Хочу учить фронтенд, потому что:',
            because1: 'Это интересно',
            because2: 'Перспективно',
            because3: 'Это будущее',
            title_tel: 'Мой контактный телефон',
            tel: '0501525177'
            
    };
    
    var content = tmpl(html, {
        data: myInfo
    });
    
    $('.wrapper').append(content);
        
    
});;$(function() {
  
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');
 
    var pixelsOffset = 225;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
    var maximumOffset = 0;
    
    leftUIEl.click(function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 225;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
 
    rightUIEl.click(function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 225;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
});
;(function(){
var cache = {};

this.tmpl = function tmpl(str, data){
// Figure out if we’re getting a template, or if we need to
// load the template – and be sure to cache the result.
var fn = !/\W/.test(str) ?
cache[str] = cache[str] ||
tmpl(document.getElementById(str).innerHTML) :

// Generate a reusable function that will serve as a template
// generator (and which will be cached).
new Function("obj",
"var p=[],print=function(){p.push.apply(p,arguments);};" +

// Introduce the data as local variables using with(){}
"with(obj){p.push('" +

// Convert the template into pure JavaScript
str
.replace(/[\r\t\n]/g, " ")
.split("<%").join("\t") .replace(/((^|%>)[^\t]*)’/g, "$1\r")
.replace(/\t=(.*?)%>/g, "',$1,'")
.split("\t").join("');")
.split("%>").join("p.push('")
.split("\r").join("\\'")
+ "');}return p.join('');");

// Provide some basic currying to the user
return data ? fn( data ) : fn;
};
})();