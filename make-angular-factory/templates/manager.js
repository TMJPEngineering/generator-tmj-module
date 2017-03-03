/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module %>')
        .factory('<%= name.ucwords() %>Manager', <%= name.ucwords() %>Manager);

    <%= name.ucwords() %>Manager.$inject = [];

    /* @ngInject */
    function <%= name.ucwords() %>Manager() {
        var <%= module %>;
        var service = {
            get: get<%= name.ucwords() %>,
            set: set<%= name.ucwords() %>
        };

        return service;

        function get<%= name.ucwords() %>() {
            return <%= module %>;
        }

        function set<%= name.ucwords() %>(data) {
            <%= module %> = data;
        }
    }
})();
