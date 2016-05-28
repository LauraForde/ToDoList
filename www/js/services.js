angular.module('starter.services', [])

.factory('Task', function() {
    
    var item = {
        newItem: []
    };
    
    function addItem(title){
        item.newItem.push({title: title});
    };
    return{
        item: item,
        addItem: addItem
    };
});
