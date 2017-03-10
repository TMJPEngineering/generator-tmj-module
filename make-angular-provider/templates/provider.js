/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .provider('<%= name.ucfirst() %>Provider', <%= name.ucfirst() %>Provider);

    <%= name.ucfirst() %>Provider.$inject = [];

    /* @ngInject */
    function <%= name.ucfirst() %>Provider() {
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
    }
})();
