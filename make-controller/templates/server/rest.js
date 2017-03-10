'use strict';

/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

var path = require('path');

module.exports = function (method) {
    var methods = {
        index: index,
        create: create,
        store: store,
        show: show,
        edit: edit,
        update: update,
        destroy: destroy
    };

    return methods[method]();

    function index() {
        return function (req, res, next) {
            if (req.route.methods.get) {

            }
        }
    }

    function create() {
        return function (req, res, next) {
            if (req.route.methods.get) {
                
            }
        }
    }

    function store() {
        return function (req, res, next) {
            if ( ! req.route.methods.get) {
                
            }
        }
    }

    function show() {
        return function (req, res, next) {
            if (req.route.methods.get) {
                
            }
        }
    }

    function edit() {
        return function (req, res, next) {
            if (req.route.methods.get) {
                
            }
        }
    }

    function update() {
        return function (req, res, next) {
            if ( ! req.route.methods.get) {
                
            }
        }
    }

    function destroy() {
        return function (req, res, next) {
            if ( ! req.route.methods.get) {
                
            }
        }
    }
};
