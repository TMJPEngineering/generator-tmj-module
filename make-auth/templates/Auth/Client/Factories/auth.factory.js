(function () {
    'use strict';

    angular.module('auth')
        .factory('AuthFactory', AuthFactory);
    AuthFactory.$inject = ['$http'];

    function AuthFactory($http) {
        return {
            forgot: forgot,
            login: login,
            register: register,
            reset: reset
        }

        function forgot(data) {
            $http.post('/password/reset', data).then(function (res) {
                if (res.data) {
                    alert('We have e-mailed your password reset link!');
                } else {
                    alert('We can\'t find a user with that e-mail address.')
                }
            });
        }

        function login(credentials) {
            $http.post('/login', credentials).then(function (res) {
                if (res.data) {
                    window.location.assign('/home');
                } else {
                    alert('Invalid credentials');
                }
            });
        }

        function register(data) {
            $http.post('/register', data).then(function (res) {
                if (res.data) {
                    window.location.assign('/home');
                } else {
                    alert('Username already exist');
                }
            });
        }

        function reset(data) {
            $http.put('/password/reset/' + data.token, data).then(function (res) {
                if (res.data) {
                    window.location.assign('/login');
                } else {
                    alert('We can\'t find a user with that e-mail address.');
                }
            });
        }
    }
})();
