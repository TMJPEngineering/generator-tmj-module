/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .factory('<%= name.camelCase().ucfirst() %>Factory', <%= name.camelCase().ucfirst() %>Factory);

    <%= name.camelCase().ucfirst() %>Factory.$inject = [];

    /* @ngInject */
    function <%= name.camelCase().ucfirst() %>Factory() {
        var factory = {};

        return factory;
    }
})();
