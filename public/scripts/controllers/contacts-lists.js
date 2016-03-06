angular
    .module('JumpStartUI')
    .controller('ContactListController', function ($scope, Contact) {

        $scope.tableHead = ['First Name', 'Last Name', 'E-Mail', 'Phone', 'Actions'];

        $scope.saveContact = function (user) {
            if ($scope.newContact.$valid) {
                Contact.save(user, function () {
                    getContacts();
                });
            } else {
                alert("Error, enter correct formats");
            }
        };

        $scope.removeContact = function (id) {
            Contact.delete({"id" :id}, function () {
                getContacts();
            });
        };

        $scope.editContact = function (contact) {
            contact.showEditable = !contact.showEditable;
        };

        $scope.updateContact = function (contact) {
            Contact.update({"id" :contact._id}, contact, function () {
                getContacts();
            })
        };

        function getContacts() {
            $scope.contacts = Contact.query();
        }

        getContacts();
    });