angular.module('starter.controllers', [])

.controller('TasksCtrl', function($scope, Task) {
    $scope.item = Task.item;
})

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
})

.controller('AccountCtrl', function($scope) {});
