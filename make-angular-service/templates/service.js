/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .service('<%= name.camelCase().ucfirst() %>Service', <%= name.camelCase().ucfirst() %>Service);

    <%= name.camelCase().ucfirst() %>Service.$inject = ['<%= name.camelCase().ucfirst() %>Manager'];

    /* @ngInject */
    function <%= name.camelCase().ucfirst() %>Service(<%= name.camelCase().ucfirst() %>Manager) {
        this.get = get<%= name.camelCase().ucfirst() %>Manager;
        this.set = set<%= name.camelCase().ucfirst() %>Manager;

        function get<%= name.camelCase().ucfirst() %>Manager() {
            return <%= name.camelCase().ucfirst() %>Manager.get();
        }

        function set<%= name.camelCase().ucfirst() %>Manager(data) {
            <%= name.camelCase().ucfirst() %>Manager.set(data);
        }
    }
})();
