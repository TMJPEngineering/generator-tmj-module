/**
 * @author TMJP Engineering Team
 * @copyright 2017
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .directive('<%= name.camelCase().toLowerCase() %>', <%= name.camelCase().toLowerCase() %>);

    <%= name.camelCase().toLowerCase() %>.$inject = [];

    /* @ngInject */
    function <%= name.camelCase().toLowerCase() %>() {
        var directive = {
            bindToController: true,
            controller: <%= name.camelCase().ucfirst() %>Controller,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {}
        };

        return directive;

        function link(scope, element, attrs) {}
    }

    /* @ngInject */
    function <%= name.camelCase().ucfirst() %>Controller() {}
})();