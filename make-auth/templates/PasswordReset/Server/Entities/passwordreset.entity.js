'use strict';

/**
 * @author TMJP Engineering Team
 * @copyright 2017
 */

var PasswordReset = require('./../Schemas/passwordreset.schema');

module.exports = {
    save: function (params) {
        var date = new Date();
        var passwordReset = new PasswordReset({
            email: params.email,
            token: date.toString()
        });

        passwordReset.save(function (err) {
            if (err) throw err;
        });
    },
    findByToken: function (token) {
        return PasswordReset.findOne({ token: token })
        .exec(function (err, passwordReset) {
            if (err) throw err;
            return passwordReset;
        });
    }
};
