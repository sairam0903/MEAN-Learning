angular
    .module('JumpStartUI')
    .controller('LoginController', function ($scope) {
       $scope.setUserName = function (name) {
           localStorage.setItem('userName', JSON.stringify(name))
       }
    });