'use strict';

var generator = require('yeoman-generator'),
    error = require('./../error'),
    constants = require('./../constants'),
    custom = require('./../custom-prototypes');

module.exports = generator.extend({
    initializing: function () {
        error(this, 'provider');
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
            this.templatePath('provider.js'),
            this.destinationPath(constants.module.path + data.module.ucfirst() + '/Client/Providers/' + data.name.toLowerCase() + '.provider.js'),
            data
        );
    }
});
