/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .factory('<%= name.ucwords() %>', <%= name.ucwords() %>);

    <%= name.ucwords() %>.$inject = ['$resource'];

    /* @ngInject */
    function <%= name.ucwords() %>($resource) {
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
