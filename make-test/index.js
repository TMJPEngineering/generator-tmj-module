'use strict';

var generator = require('yeoman-generator'),
    error = require('./../error'),
    constants = require('./../constants');

module.exports = generator.extend({
    initializing: function () {
        error(this, 'test');
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
            this.templatePath('test.js'),
            this.destinationPath(constants.module.path + data.module + '/Client/Tests/' + data.name.toLowerCase() + '.test.js'),
            data
        );

        this.fs.copyTpl(
            this.templatePath('test.js'),
            this.destinationPath(constants.module.path + data.module + '/Server/Tests/' + data.name.toLowerCase() + '.test.js'),
            data
        );
    }
});
