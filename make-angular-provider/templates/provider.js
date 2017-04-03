/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .provider('<%= name.camelCase().ucfirst() %>Provider', <%= name.camelCase().ucfirst() %>Provider);

    <%= name.camelCase().ucfirst() %>Provider.$inject = [];

    /* @ngInject */
    function <%= name.camelCase().ucfirst() %>Provider() {
        var <%= module.ucfirst() %> = [];
        
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
    }
})();
