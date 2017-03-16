(function () {
    'use strict';

    angular.module('auth')
        .controller('AuthController', AuthController);
    AuthController.$inject = ['AuthFactory', '$state'];

    function AuthController(AuthFactory, $state) {
        var vm = this;
        vm.state = $state;
        vm.email = '';
        vm.password = '';
        vm.name = '';

        vm.login = login;
        vm.register = register;
        vm.forgot = forgot;
        vm.reset = reset;

        function login() {
            AuthFactory.login({ email: vm.email, password: vm.password });
        }

        function register() {
            AuthFactory.register({ name: vm.name, email: vm.email, password: vm.password });
        }

        function forgot() {
            AuthFactory.forgot({ email: vm.email });
        }

        function reset() {
            AuthFactory.reset({ email: vm.email, password: vm.password, token: $state.params.token });
        }
    }
})();
