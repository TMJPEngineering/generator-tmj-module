/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .controller('<%= name.camelCase().ucfirst() %>Controller', <%= name.camelCase().ucfirst() %>Controller);

    <%= name.camelCase().ucfirst() %>Controller.$inject = ['<%= name.camelCase().ucfirst() %>Manager', '<%= name.camelCase().ucfirst() %>', '<%= name.camelCase().ucfirst() %>Service'];

    /* @ngInject */
    function <%= name.camelCase().ucfirst() %>Controller(<%= name.camelCase().ucfirst() %>Manager, <%= name.camelCase().ucfirst() %>, <%= name.camelCase().ucfirst() %>Service) {
        var vm = this;
        vm.<%= name.camelCase().toLowerCase() %> = [];

        activate();

        function activate() {

        }
    }
})();
