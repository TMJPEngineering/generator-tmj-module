/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .factory('<%= name %>', <%= name %>);

    <%= name %>.$inject = ['$resource'];

    /* @ngInject */
    function <%= name %>($resource) {
        var otherMethods = {
            update: {
                'method': 'PUT',
                'params': {
                    'id': '@id'
                }
            }
        };

        return $resource('<%= name.toLowerCase() %>/:id', {id: '@id'}, otherMethods);
    }
})();
