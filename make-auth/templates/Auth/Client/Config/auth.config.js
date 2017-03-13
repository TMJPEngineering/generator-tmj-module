(function () {
    'use strict';

    angular.module('auth')
        .config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    'nav': { templateUrl: 'views/auth/nav.html' },
                    'content': {
                        templateUrl: 'views/auth/home.html'
                    }
                }
            })
            .state('login', {
                url: '/login',
                views: {
                    'nav': { templateUrl: 'views/auth/nav.html' },
                    'content': {
                        templateUrl: 'views/auth/login.html'
                    }
                }
            })
            .state('register', {
                url: '/register',
                views: {
                    'nav': { templateUrl: 'views/auth/nav.html' },
                    'content': {
                        templateUrl: 'views/auth/register.html'
                    }
                }
            });
        $locationProvider.html5Mode(true);
    }
})();
