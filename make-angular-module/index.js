'use strict';

var generator = require('yeoman-generator'),
    error = require('./../error'),
    constants = require('./../constants');

module.exports = generator.extend({
    initializing: function () {
        error(this, 'module');
        this.argument('name', { type: String, required: true });
        this.argument('module', { type: String, required: true });
    },
    executing: function () {
        var data = {
            name: this.args.shift().ucfirst(),
            module: this.args.shift().ucfirst(),
            year: new Date().getFullYear()
        };

        this.fs.copyTpl(
            this.templatePath('module.js'),
            this.destinationPath(constants.module.path + data.module + '/Client/' + data.name.toLowerCase() + '.module.js'),
            data
        );
    }
});
