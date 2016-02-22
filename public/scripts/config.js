angular.module('JumpStartUI')
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'LoginController',
                templateUrl: 'login.html'
            })
            .when('/helloworld/home', {
                controller: 'HomePageController',
                templateUrl: 'views/home-page.html'
            })
            .when('/helloworld/contact', {
                controller: 'ContactListController',
                templateUrl: 'views/contacts-lists.html'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    });