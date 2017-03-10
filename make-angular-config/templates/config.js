/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module.toLowerCase() %>')
        .config(<%= name.ucfirst() %>Config);

    <%= name.ucfirst() %>Config.$inject = [];

    /* @ngInject */
    function <%= name.ucfirst() %>Config() {
        
    }
})();
