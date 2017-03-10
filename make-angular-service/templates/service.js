/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .service('<%= name %>Service', <%= name %>Service);

    <%= name %>Service.$inject = ['<%= name %>Manager'];

    /* @ngInject */
    function <%= name %>Service(<%= name %>Manager) {
        this.get = get<%= name %>Manager;
        this.set = set<%= name %>Manager;

        function get<%= name %>Manager() {
            return <%= name %>Manager.get();
        }

        function set<%= name %>Manager(data) {
            <%= name %>Manager.set(data);
        }
    }
})();
