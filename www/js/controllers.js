angular.module('starter.controllers', [])

.controller('TasksCtrl', function($scope) {})

.controller('AddTaskCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
