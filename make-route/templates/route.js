'use strict';

var route = require('./../../../vendor/router');

module.exports = function (app) {
    route.get('/', '<%= module %>.controller@index');
};
