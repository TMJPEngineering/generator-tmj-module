/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .provider('<%= name %>Provider', <%= name %>Provider);

    <%= name %>Provider.$inject = [];

    /* @ngInject */
    function <%= name %>Provider() {
        var <%= module %> = [];
        
        var provider = {
            set: set,
            $get: [factory]
        };
        
        return provider;

        function set(data) {
            module = data;
        }

        function factory() {
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
    }
})();
