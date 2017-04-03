/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .config(<%= name.camelCase().ucfirst() %>Config);

    <%= name.camelCase().ucfirst() %>Config.$inject = [];

    /* @ngInject */
    function <%= name.camelCase().ucfirst() %>Config() {
        
    }
})();
