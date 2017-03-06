/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module %>')
        .provider('<%= name.ucwords() %>Provider', <%= name.ucwords() %>Provider);

    <%= name.ucwords() %>Provider.$inject = [];

    /* @ngInject */
    function <%= name.ucwords() %>Provider() {
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
    }
})();
