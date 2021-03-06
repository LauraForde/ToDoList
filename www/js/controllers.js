angular.module('starter.controllers', [])

.controller('TasksCtrl', function($scope, Task) {
    $scope.item = Task.item;
})
// used factories lab as reference
.controller('AddTaskCtrl', function($scope, Task) {
    var item = {
        newItem: ""
    };
    
    function addItem(){
        Task.addItem(item.newItem);
        item.newItem = "";
    }
    
    $scope.item = item;
    $scope.addItem = addItem;
});
