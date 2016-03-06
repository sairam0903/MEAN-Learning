angular.module('JumpStartUI')
    .factory('Contact', function ($resource) {
        return $resource('/api/contact/:id', null, {
            'update': { method:'PUT' }
        });
    });