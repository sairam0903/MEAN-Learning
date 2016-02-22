angular.module('JumpStartUI')
    .factory('Contact', function ($resource) {
        return $resource('/api/contact/');
    });