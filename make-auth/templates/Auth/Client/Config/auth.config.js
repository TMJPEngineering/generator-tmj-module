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
                    'nav': { templateUrl: 'views/auth/layouts/nav.html' },
                    'content': {
                        templateUrl: 'views/auth/home.html'
                    }
                }
            })
            .state('login', {
                url: '/login',
                views: {
                    'nav': { templateUrl: 'views/auth/layouts/nav.html' },
                    'content': {
                        templateUrl: 'views/auth/login.html'
                    }
                }
            })
            .state('register', {
                url: '/register',
                views: {
                    'nav': { templateUrl: 'views/auth/layouts/nav.html' },
                    'content': {
                        templateUrl: 'views/auth/register.html'
                    }
                }
            })
            .state('forgot', {
                url: '/password/reset',
                views: {
                    'nav': { templateUrl: 'views/auth/layouts/nav.html' },
                    'content': {
                        templateUrl: 'views/auth/passwords/forgot.html'
                    }
                }
            })
            .state('reset', {
                url: '/password/reset/:token',
                views: {
                    'nav': { templateUrl: 'views/auth/layouts/nav.html' },
                    'content': {
                        templateUrl: 'views/auth/passwords/reset.html'
                    }
                }
            });
        $locationProvider.html5Mode(true);
    }
})();
