'use strict';

/**
 * @author TMJP Engineering Team
 * @copyright 2017
 */

var path = require('path'),
    root = path.dirname(require.main.filename),
    PasswordReset = require(root + '/modules/PasswordReset/Server/Entities/passwordreset.entity');

module.exports = function (req, res) {
    User.save(req.body);
    res.json(true);
};