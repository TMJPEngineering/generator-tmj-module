'use strict';

/**
 * @author TMJP Engineering Team
 * @copyright 2017
 */

var passport = require('passport');

module.exports = function (req, res) {
    passport.authenticate('local', function (err, user, info) {
        var throwErr = err || info;

        if (throwErr) {
            return res.status(throwErr.code).send(throwErr.message);
        }

        req.logIn(user, function (err) {
            if (err) {
                return res.status(400).send(err);
            }
            return res.json(user);
        });
    })(req, res);
};