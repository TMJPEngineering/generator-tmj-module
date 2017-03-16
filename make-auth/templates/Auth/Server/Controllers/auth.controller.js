'use strict';

var path = require('path'),
    root = path.dirname(require.main.filename),
    view = require(root + '/vendor/view'),
    dispatch = require(root + '/vendor/dispatch');

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
                dispatch('Auth::forgot', [req, res]);
            } else {
                view('auth.index', res);
            }
        }
    }

    function index() {
        return function (req, res, next) {
            if (req.route.methods.get) {
                view('auth.index', res);
            }
        }
    }

    function login() {
        return function (req, res, next) {
            if ( ! req.route.methods.get) {
                dispatch('Auth::login', [req, res]);
            } else {
                view('auth.index', res);
            }
        }
    }

    function register() {
        return function (req, res, next) {
            if ( ! req.route.methods.get) {
                dispatch('Auth::register', [req, res]);
            } else {
                view('auth.index', res);
            }
        }
    }

    function reset() {
        return function (req, res, next) {
            if ( ! req.route.methods.get) {
                dispatch('Auth::reset', [req, res]);
            } else {
                view('auth.index', res);
            }
        }
    }
};
