'use strict';

/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

var path = require('path'),
    root = path.dirname(require.main.filename),
    route = require(root + '/vendor/router');

module.exports = function (app) {
    route.get('/<%= module.toLowerCase() %>', '<%= module %>Controller@index', [], '<%= module %>');
};
