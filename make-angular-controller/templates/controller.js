/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .controller('<%= name.ucfirst() %>Controller', <%= name.ucfirst() %>Controller);

    <%= name.ucfirst() %>Controller.$inject = ['<%= name.ucfirst() %>Manager', '<%= name.ucfirst() %>', '<%= name.ucfirst() %>Service'];

    /* @ngInject */
    function <%= name.ucfirst() %>Controller(<%= name.ucfirst() %>Manager, <%= name.ucfirst() %>, <%= name.ucfirst() %>Service) {
        var vm = this;
        vm.<%= name.toLowerCase() %> = [];

        activate();

        function activate() {

        }
    }
})();
