define (
    'model',
    ['jquery'], function() {
        
        return {
            model: model = function (data) {
                var self = this;
    self.data = ['Алина', 'Артем', 'Наташа', 'Алексей'];
    self.addItem = function(item) {
        if (item.length === 0 || item.indexOf(' ') === 0) {
           
             return ;
            
        }
        
    self.data.push(item);
        
        return self.data;
    };
    
    self.removeItem = function(item) {
        var index = self.data.indexOf(item);
         
        if (index === -1) {
            return;
        };
        
    self.data.splice(index, 1);
        return self.data;
        
    };
    
    self.editItem = function(editItem, item1) {

        var newIndex = self.data.indexOf(item1);
        self.data[newIndex] = editItem;
        return self.data;
        
    }
        }}
    })
