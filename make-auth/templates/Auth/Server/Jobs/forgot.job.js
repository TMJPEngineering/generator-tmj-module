'use strict';

/**
 * @author TMJP Engineering Team
 * @copyright 2017
 */


var path = require('path'),
    root = path.dirname(require.main.filename),
    User = require(root + '/modules/User/Server/Entities/user.entity'),
    PasswordReset = require(root + '/modules/PasswordReset/Server/Entities/passwordreset.entity');

module.exports = function (req, res) {
    User.findByEmail(req.body.email).then(function (user) {
        if (user) {
            PasswordReset.save(req.body);
        }

        return res.json(user);
    });
};