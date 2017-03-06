'use strict';

var generator = require('yeoman-generator'),
    error = require('./../error'),
    constants = require('./../constants'),
    custom = require('./../custom-prototypes');

module.exports = generator.extend({
    initializing: function () {
        error(this, 'factory');
        this.argument('name', { type: String, required: true });
        this.argument('module', { type: String, required: true });
    },
    executing: function () {
        var data = {
            name: this.args.shift(),
            module: this.args.shift(),
            year: new Date().getFullYear()
        };

        this.fs.copyTpl(
            this.templatePath('manager.js'),
            this.destinationPath(constants.module.path + data.module + '/client/' + data.name + '-manager.factory.js'),
            data
        );

        this.fs.copyTpl(
            this.templatePath('resource.js'),
            this.destinationPath(constants.module.path + data.module + '/client/' + data.name + '-resource.factory.js'),
            data
        );
    }
});
