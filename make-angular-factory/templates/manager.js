/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .factory('<%= name.camelCase().ucfirst() %>Manager', <%= name.camelCase().ucfirst() %>Manager);

    <%= name.camelCase().ucfirst() %>Manager.$inject = [];

    /* @ngInject */
    function <%= name.camelCase().ucfirst() %>Manager() {
        var <%= module.ucfirst() %>;
        var service = {
            get: get<%= name.camelCase().ucfirst() %>,
            set: set<%= name.camelCase().ucfirst() %>
        };

        return service;

        function get<%= name.camelCase().ucfirst() %>() {
            return <%= module.ucfirst() %>;
        }

        function set<%= name.camelCase().ucfirst() %>(data) {
            <%= module.ucfirst() %> = data;
        }
    }
})();
