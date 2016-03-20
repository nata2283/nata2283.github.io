var  myBase = +prompt('Введите число:');
var  myExp = +prompt('Введите степень:');


if ( isNaN(myBase)||(isNaN(myExp) )||( parseInt(myBase) ) != myBase ||( parseInt(myExp) ) != myExp) {
    alert('Введите целые числовые значения');
} else {
   var res = function pow() {
       pow();   }
       console.log( pow(myBase, myExp) );
       }
        
function pow(myBase, myExp) {
  var res = myBase;
    if (myExp === 0) {
            res = 1;
        } else { if (myExp < 0) {
            myExp = myExp * (-1);
            
            for (var i = 1; i < myExp; i++) {
                res *= myBase;  
                }
            return res = 1 / res;
        }
     else {
    
    for (var i = 1; i < myExp; i++) {
        res = res * myBase;
            }
        }
    }
return res;
}


