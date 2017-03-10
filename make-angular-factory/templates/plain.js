/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .factory('<%= name %>Factory', <%= name %>Factory);

    <%= name %>Factory.$inject = [];

    /* @ngInject */
    function <%= name %>Factory() {
        var factory = {};

        return factory;
    }
})();
