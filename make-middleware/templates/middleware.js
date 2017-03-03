'use strict';

/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

module.exports = function (method) {
    var methods = {};

    return methods[method]();
};
