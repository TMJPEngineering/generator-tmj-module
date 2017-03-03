'use strict';

var generator = require('yeoman-generator'),
    error = require('./../error'),
    constants = require('./../constants');

module.exports = generator.extend({
    initializing: function () {
        error(this, ['controller', 'module'], 'controller');
        this.argument('name', { type: String, required: true });
        this.argument('module', { type: String, required: true });
    },
    execute: function () {
        var data = {
            name: this.args.shift(),
            module: this.args.shift(),
            year: new Date().getFullYear()
        };

        this.fs.copyTpl(
            this.templatePath('server/controller.js'),
            this.destinationPath(constants.module.path + '/' + data.module + '/server/' + data.name + '.controller.js'),
            data
        );
    }
});
