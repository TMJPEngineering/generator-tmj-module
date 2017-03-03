/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module %>')
        .config(<%= name.ucwords() %>Config);

    <%= name.ucwords() %>Config.$inject = [];

    /* @ngInject */
    function <%= name.ucwords() %>Config() {
        
    }
})();
