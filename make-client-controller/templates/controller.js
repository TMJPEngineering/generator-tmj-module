/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module %>')
        .controller('<%= name.ucwords() %>Controller', <%= name.ucwords() %>Controller);

    <%= name.ucwords() %>Controller.$inject = ['<%= name.ucwords() %>Manager', '<%= name.ucwords() %>', '<%= name.ucwords() %>Service'];

    /* @ngInject */
    function <%= name.ucwords() %>Controller(<%= name.ucwords() %>Manager, <%= name.ucwords() %>, <%= name.ucwords() %>Service) {
        var vm = this;
        vm.<%= name.toLowerCase() %> = [];

        activate();

        function activate() {

        }
    }
})();
