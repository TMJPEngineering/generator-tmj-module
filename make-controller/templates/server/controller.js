'use strict';

/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

var path = require('path');

module.exports = function (method) {
    var methods = {
        index: index
    };

    return methods[method]();

    function index() {
        return function (req, res, next) {
            if (req.route.methods.get) {
                res.sendFile(path.join(__dirname, '../../../resources/views/<%= module %>', 'index.html'));
            }
        }
    }
};
