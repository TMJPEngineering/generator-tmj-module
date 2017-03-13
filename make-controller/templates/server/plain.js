'use strict';

/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

var path = require('path'),
    root = path.dirname(require.main.filename),
    view = require(root + '/vendor/view');

module.exports = function (method) {
    var methods = {};

    return methods[method]();
};
