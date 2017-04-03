/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .factory('<%= name.camelCase().ucfirst() %>', <%= name.camelCase().ucfirst() %>);

    <%= name.camelCase().ucfirst() %>.$inject = ['$resource'];

    /* @ngInject */
    function <%= name.camelCase().ucfirst() %>($resource) {
        var otherMethods = {
            update: {
                'method': 'PUT',
                'params': {
                    'id': '@id'
                }
            }
        };

        return $resource('<%= name.camelCase().toLowerCase() %>/:id', {id: '@id'}, otherMethods);
    }
})();
