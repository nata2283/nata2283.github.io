define (
    'controller',
    ['jquery'], function() {
        
        return {
            controller: controller = function (model, view) {
                   var self = this;
    
    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.item-delete', removeItem);
    view.elements.listContainer.on('click', '.item-edit', editItem);
    
    function addItem() {
        
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        if (newItem.length === 0) {
           
             return self.data;
            
        } else {
             view.renderList(model.data);
        view.elements.input.val('');
        }
           
    };
    
    function removeItem () {
        var item = $(this).attr('data-value');
        model.removeItem(item);
        view.renderList(model.data);
    };
    
    function editItem () {
        	var oldText, newText, item1;
        
            	$(".item-edit").on("dblclick", function replaceHTML(){
                                   
					oldText =  $(this).attr('data-val');
                       item1 = oldText;
                        
						$(this)
							   .html("")
                        .html("<form><input type=\"text\" class=\"editBox\" value=\"" + oldText + "\" /> </form><span class=\"btnSave\">&#10004;</span>  ")
							   .on('dblclick', replaceHTML);
                   
                
        $(".btnSave").on("click", 
					function()
					{
						newText = $(this).siblings("form")
										 .children(".editBox")
										 .val().replace(/"/g, "&quot;");
										 
						$(this).parent()
							   .html(newText)
							   .on("dblclick", function replaceHTML(){});
            var editItem = newText;
     
            model.editItem(editItem, item1);
             console.log('editItem ', editItem);
        
             view.renderList(model.data);
            console.log(model.data);
					}
					);
					
               } );                   
            }
            }
        }
    })
    