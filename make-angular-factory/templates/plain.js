/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module %>')
        .factory('<%= name.ucwords() %>Factory', <%= name.ucwords() %>Factory);

    <%= name.ucwords() %>Factory.$inject = [];

    /* @ngInject */
    function <%= name.ucwords() %>Factory() {
        var factory = {};

        return factory;
    }
})();
