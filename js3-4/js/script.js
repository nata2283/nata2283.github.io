var newObj = {
   myBody: document.body,

    myHeader: document.createElement('header'),
    myH1: document.createElement('h1'),
    myForm: document.createElement('form'),
    myButton: document.createElement('button'),
    name: function () {
      var header = document.createElement('header');
        this.myBody.appendChild(this.myHeader);
        this.myHeader.appendChild(this.myH1);
        this.myH1.classList.add('title');
        this.myH1.innerHTML = 'Тест по программированию';
        this.myBody.appendChild(this.myForm);
   
        for (var i = 1; i < 4; i++) {
      var questionBox = document.createElement('div');
        var questionP = document.createElement('p');
        var questionName = document.createTextNode(i + '. Вопрос № ' + i);
        var questionLabel;
        this.myForm.appendChild(questionBox);
       questionBox.appendChild(questionP);
        questionP.appendChild(questionName);
     for (var j = 1; j < 4; j++) {
        var textLabel = document.createTextNode('Вариант ответа № ' + j);
        var questionLabel = document.createElement('label');
        //questionLabel.setAttribute('for', 'answer');
        var questionAnswerCheck = document.createElement('input');
        questionAnswerCheck.setAttribute('type', 'checkbox');
         questionAnswerCheck.setAttribute('name', 'answer');
         questionAnswerCheck.setAttribute('id', 'answer');
         //questionAnswerCheck.classList.add('check');
        questionBox.appendChild(questionLabel);
        console.log('label' + questionLabel);
        questionLabel.appendChild(questionAnswerCheck);
        questionLabel.appendChild(textLabel);
     }    
    }
        
       this.myForm.appendChild(this.myButton);
        this.myButton.innerHTML = 'Проверить мои результаты';
}
}
newObj.name();





