/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .factory('<%= name.ucfirst() %>Manager', <%= name.ucfirst() %>Manager);

    <%= name.ucfirst() %>Manager.$inject = [];

    /* @ngInject */
    function <%= name.ucfirst() %>Manager() {
        var <%= module.ucfirst() %>;
        var service = {
            get: get<%= name.ucfirst() %>,
            set: set<%= name.ucfirst() %>
        };

        return service;

        function get<%= name.ucfirst() %>() {
            return <%= module.ucfirst() %>;
        }

        function set<%= name.ucfirst() %>(data) {
            <%= module.ucfirst() %> = data;
        }
    }
})();
