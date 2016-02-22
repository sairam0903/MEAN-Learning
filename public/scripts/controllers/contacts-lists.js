angular
    .module('JumpStartUI')
    .controller('ContactListController', function ($scope, Contact) {
        $scope.tableHead = ['First Name', 'Last Name', 'E-Mail', 'Phone'];
        $scope.contacts = Contact.query();
        $scope.saveContact = function (user) {
            console.log($scope.newContact.$valid, Contact);
            if ($scope.newContact.$valid) {
                Contact.save(user);
                $scope.contacts = Contact.query();
                console.log($scope.contacts)
            } else {
                alert("Error, enter correct formats");
            }
        };
        console.log($scope.contacts);
    });