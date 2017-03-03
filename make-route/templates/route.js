'use strict';

/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

var route = require('./../../../vendor/router');

module.exports = function (app) {
    route.get('/', '<%= module %>.controller@index');
};
