/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module %>')
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

        return $resource('<%= name %>/:id', {id: '@id'}, otherMethods);
    }
})();
