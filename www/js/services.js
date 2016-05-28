angular.module('starter.services', [])

.factory('Task', function() {
    
    var item = {
        itemToAdd: []
    };
    
    function addItem(title){
        item.itemToAdd.push({title: title});
    }
    return{
        item: item,
        addItem: addItem
    };
});
