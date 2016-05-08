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
        
    
});