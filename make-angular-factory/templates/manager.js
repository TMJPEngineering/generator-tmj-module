/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .factory('<%= name %>Manager', <%= name %>Manager);

    <%= name %>Manager.$inject = [];

    /* @ngInject */
    function <%= name %>Manager() {
        var <%= module %>;
        var service = {
            get: get<%= name %>,
            set: set<%= name %>
        };

        return service;

        function get<%= name %>() {
            return <%= module %>;
        }

        function set<%= name %>(data) {
            <%= module %> = data;
        }
    }
})();
