/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .factory('<%= name.ucfirst() %>', <%= name.ucfirst() %>);

    <%= name.ucfirst() %>.$inject = ['$resource'];

    /* @ngInject */
    function <%= name.ucfirst() %>($resource) {
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
