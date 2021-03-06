'use strict';

var myTest = [
    
    {myTitle: 'Тест по программированию'},
    
    {
        question: 'Зачем используется ключевое слово var?',
        answer: ['Для выполнения написанного выше кода', 'Для создания новой переменной', 'Для вывода результатов программы на экран'],
        rightAnswer: [0, 1, 0]
    },
    
    {
        question: 'Какое название переменной верное с точки зрения общепринятого в javascript стиля названия переменных?',
        answer: ['myVariable', 'myvariable', 'my_variable'],
        rightAnswer: [1, 0, 0]
    },
    
    {
        question: 'Какого типа данных нет в javascript?',
        answer: ['Boolean', 'String', 'Decimal'],
        rightAnswer: [0, 0, 1]  
    }      
];

    localStorage.setItem('task', JSON.stringify(myTest));

    $(function() {
        var test = $('#test').html();
        
        var content = tmpl(test, {
            data: myTest
        });
        $('.test-body').append(content);
    });


$(function() {
$('.button').click(function() { //проверяем результаты по клику на кнопку
    var $right;
    var countAnswer = 0;
        $('.result').each(function() {

           if  ($(this).attr('value') == '1') {
                if ($(this).prop('checked') == '1') {
            console.log('this value', $(this).attr('value'));
    			$right = true;
                ++countAnswer;
    		}; 
    };

    	$('#overlay').fadeIn(400, 
		 	function(){ 
				$('#modal_form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);    
            $('.result-answer')[0].innerHTML = 'Количество правильных ответов: ' + countAnswer; 
		});      

	});

	$('.clear, #overlay').click( function(){ 
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 100,  
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(300);
				}
			);
        
         $('input[type=radio]:checked').each(function(){$(this).removeAttr("checked");});
	});
       
});
});

