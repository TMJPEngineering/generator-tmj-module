/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .controller('<%= name %>Controller', <%= name %>Controller);

    <%= name %>Controller.$inject = ['<%= name %>Manager', '<%= name %>', '<%= name %>Service'];

    /* @ngInject */
    function <%= name %>Controller(<%= name %>Manager, <%= name %>, <%= name %>Service) {
        var vm = this;
        vm.<%= name.toLowerCase() %> = [];

        activate();

        function activate() {

        }
    }
})();
