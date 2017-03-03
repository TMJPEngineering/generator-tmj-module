/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

(function() {
    'use strict';

    angular
        .module('<%= module %>')
        .config(<%= name %>Config);

    <%= name %>Config.$inject = [];

    /* @ngInject */
    function <%= name %>Config() {
        
    }
})();
