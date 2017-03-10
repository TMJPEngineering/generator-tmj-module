/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .factory('<%= name.ucfirst() %>Factory', <%= name.ucfirst() %>Factory);

    <%= name.ucfirst() %>Factory.$inject = [];

    /* @ngInject */
    function <%= name.ucfirst() %>Factory() {
        var factory = {};

        return factory;
    }
})();
