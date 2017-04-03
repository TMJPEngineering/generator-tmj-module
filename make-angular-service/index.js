'use strict';

var generator = require('yeoman-generator'),
    error = require('./../error'),
    constants = require('./../constants'),
    custom = require('./../custom-prototypes');

module.exports = generator.extend({
    initializing: function () {
        error(this, 'angular-service');
        this.argument('name', { type: String, required: true });
        this.argument('module', { type: String, required: true });
    },
    executing: function () {
        var data = {
            name: this.args.shift(),
            module: this.args.shift().camelCase(),
            year: new Date().getFullYear()
        };

        this.fs.copyTpl(
            this.templatePath('service.js'),
            this.destinationPath(constants.module.path + data.module.ucfirst() + '/Client/Services/' + data.name.toLowerCase() + '.service.js'),
            data
        );
    }
});
