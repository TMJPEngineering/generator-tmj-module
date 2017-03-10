/**
 * @author TMJP Engineering Team
 * @copyright 2017
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .directive('<%= name.toLowerCase() %>', <%= name.toLowerCase() %>);

    <%= name.toLowerCase() %>.$inject = [];

    /* @ngInject */
    function <%= name.toLowerCase() %>() {
        var directive = {
            bindToController: true,
            controller: <%= name %>Controller,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {}
        };

        return directive;

        function link(scope, element, attrs) {}
    }

    /* @ngInject */
    function <%= name %>Controller() {}
})();