/**
 * @author TMJP Engineering Team
 * @copyright 2017
 */

(function() {
    'use strict';

    angular
        .module('<%= module %>')
        .directive('<%= name %>', <%= name %>);

    <%= module %>.$inject = [];

    /* @ngInject */
    function directive() {
        var directive = {
            bindToController: true,
            controller: <%= name.ucwords() %>Controller,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {}
        };

        return directive;

        function link(scope, element, attrs) {}
    }

    /* @ngInject */
    function <%= name.ucwords() %>Controller() {}
})();