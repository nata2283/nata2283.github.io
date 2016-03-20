var arr = Array();

for (var i = 0; i < 5; i++ ) {
     arr[i] = prompt('Введите имена:');
   console.log(arr[i]);
}
var myFlag;
var myName = prompt('Введите имя пользователя:');
//console.log(myName);
for (var i = 0; i < 5; i++) {if (myName == arr[i]) {
    myFlag = true;
    break;
}  else {  myFlag = false;
        }                            
}

if (myFlag == true) {
    alert(myName + ', вы успешно вошли!');
} else {alert('Ошибка, такого пользователя не существует!');}
