'use strict';

var path = require('path'),
    root = path.dirname(require.main.filename),
    route = require(root + '/vendor/router');

module.exports = function (app) {
    route.setModule('Auth');

    route.get('/home', 'AuthController@index', ['Auth::protect']);

    route.get('/login', 'AuthController@login');
    route.get('/register', 'AuthController@register');
    route.get('/password/reset', 'AuthController@forgot');
    route.get('/password/reset/:token', 'AuthController@reset');

    route.post('/login', 'AuthController@login');
    route.post('/register', 'AuthController@register');
    route.post('/password/reset', 'AuthController@forgot');

    route.update('/password/reset/:token', 'AuthController@reset');
};
