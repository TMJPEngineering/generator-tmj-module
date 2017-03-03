'use strict';

var generator = require('yeoman-generator'),
    error = require('./../error'),
    constants = require('./../constants');

module.exports = generator.extend({
    initializing: function () {
        error(this, ['test', 'module'], 'test');
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
            this.templatePath('test.js'),
            this.destinationPath(constants.module.path + data.module + '/client/' + data.name + '.test.js'),
            data
        );

        this.fs.copyTpl(
            this.templatePath('test.js'),
            this.destinationPath(constants.module.path + data.module + '/server/' + data.name + '.test.js'),
            data
        );
    }
});
