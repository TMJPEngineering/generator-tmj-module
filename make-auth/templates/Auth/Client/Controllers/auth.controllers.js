(function () {
    'use strict';

    angular.module('auth')
        .controller('AuthController', AuthController);
    AuthController.$inject = ['AuthFactory', '$state'];

    function AuthController(AuthFactory, $state) {
        var vm = this;
        vm.state = $state;
        vm.username = '';
        vm.password = '';
        vm.name = '';

        vm.login = login;
        vm.register = register;

        function login() {
            AuthFactory.login({ username: vm.username, password: vm.password });
        }

        function register() {
            AuthFactory.register({ name: vm.name, username: vm.username, password: vm.password });
        }
    }
})();
