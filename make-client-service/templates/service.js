/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module %>')
        .service('<%= name.ucwords() %>Service', <%= name.ucwords() %>Service);

    <%= name.ucwords() %>Service.$inject = ['<%= name.ucwords() %>Manager'];

    /* @ngInject */
    function <%= name.ucwords() %>Service(<%= name.ucwords() %>Manager) {
        this.get = get<%= name.ucwords() %>Manager;
        this.set = set<%= name.ucwords() %>Manager;

        function get<%= name.ucwords() %>Manager() {
            return <%= name.ucwords() %>Manager.get();
        }

        function set<%= name.ucwords() %>Manager(data) {
            <%= name.ucwords() %>Manager.set(data);
        }
    }
})();
