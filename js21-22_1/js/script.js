var testPow = {
    pow: function(myBase, myExp) {
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
}

try {
    module.exports = testPow;
} catch(e) {}