angular
    .module('JumpStartUI')
    .controller('HomePageController', function ($scope) {
        if (localStorage.getItem('userName') !== "undefined" && localStorage.getItem('userName') !== "") {
            $scope.user = JSON.parse(localStorage.getItem('userName'));
        } else {
            $scope.user = "User";
        }
    });