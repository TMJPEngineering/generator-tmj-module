/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .service('<%= name.ucfirst() %>Service', <%= name.ucfirst() %>Service);

    <%= name.ucfirst() %>Service.$inject = ['<%= name.ucfirst() %>Manager'];

    /* @ngInject */
    function <%= name.ucfirst() %>Service(<%= name.ucfirst() %>Manager) {
        this.get = get<%= name.ucfirst() %>Manager;
        this.set = set<%= name.ucfirst() %>Manager;

        function get<%= name.ucfirst() %>Manager() {
            return <%= name.ucfirst() %>Manager.get();
        }

        function set<%= name.ucfirst() %>Manager(data) {
            <%= name.ucfirst() %>Manager.set(data);
        }
    }
})();
