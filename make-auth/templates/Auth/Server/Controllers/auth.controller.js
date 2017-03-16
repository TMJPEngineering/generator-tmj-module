'use strict';

var path = require('path'),
    root = path.dirname(require.main.filename),
    passport = require('passport'),
    User = require(root + '/modules/User/Server/Entities/user.entity'),
    PasswordReset = require(root + '/modules/PasswordReset/Server/Entities/passwordreset.entity');

module.exports = function (method) {
    var methods = {
        forgot: forgot,
        index: index,
        login: login,
        register: register,
        reset: reset,
    };

    return methods[method]();

    function forgot() {
        return function (req, res, next) {
            if ( ! req.route.methods.get) {
                PasswordReset.save(req.body);
                res.json(true);
            } else {
                res.sendFile(root + '/resources/views/auth/index.html');
            }
        }
    }

    function index() {
        return function (req, res, next) {
            if (req.route.methods.get) {
                res.sendFile(root + '/resources/views/auth/index.html');
            }
        }
    }

    function login() {
        return function (req, res, next) {
            if ( ! req.route.methods.get) {
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
            } else {
                res.sendFile(root + '/resources/views/auth/index.html');
            }
        }
    }

    function register() {
        return function (req, res, next) {
            if ( ! req.route.methods.get) {
                User.save(req.body);
                res.json(true);
            } else {
                res.sendFile(root + '/resources/views/auth/index.html');
            }
        }
    }

    function reset() {
        return function (req, res, next) {
            if ( ! req.route.methods.get) {
                PasswordReset.findByToken(req.body.token).then(function (passwordReset) {
                    if (passwordReset) {
                        User.updateByEmail(passwordReset.email, req.body.password);
                    }

                    res.json(passwordReset);
                });
            } else {
                res.sendFile(root + '/resources/views/auth/index.html');    
            }
        }
    }
};
