'use strict';

/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

var path = require('path'),
    root = path.dirname(require.main.filename);

module.exports = function (method) {
    var methods = {
        index: index
    };

    return methods[method]();

    function index() {
        return function (req, res, next) {
            if (req.route.methods.get) {
                res.sendFile(root + '/resources/views/<%= module.toLowerCase() %>/index.html');
            }
        }
    }
};
