var testPow = require('../js/script.js');

describe ("app", function() {
    it ("It should call pow method", function() {
        var result;
        
        result = testPow.pow(2, 3);
        
        expect(result).toEqual(8);
    });
});


