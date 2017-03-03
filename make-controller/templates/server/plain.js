'use strict';

/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

var path = require('path');

module.exports = function (method) {
    var methods = {};

    return methods[method]();
};
