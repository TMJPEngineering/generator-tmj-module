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
    PasswordReset.findByToken(req.body.token).then(function (passwordReset) {
        if (passwordReset) {
            User.updateByEmail(passwordReset.email, req.body.password);
        }

        res.json(passwordReset);
    });
};