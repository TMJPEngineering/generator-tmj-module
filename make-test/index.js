'use strict';

var generator = require('yeoman-generator'),
    error = require('./../error'),
    constants = require('./../constants'),
    custom = require('./../custom-prototypes'),
    option;

module.exports = generator.extend({
    initializing: function () {
        error(this, 'test', true);
        var options = ['client', 'server'];
        this.argument('name', { type: String, required: true });
        this.argument('module', { type: String, required: true });

        if (this.options.kind !== undefined) {
            if (options.includes(this.options.kind)) {
                option = this.options.kind;
            } else {
                console.log(chalk.red('Error:\n  - ') + 'Invalid option');
                process.exit(1);
            }
        }
    },
    executing: function () {
        var data = {
            name: this.args.shift(),
            module: this.args.shift().camelCase(),
            year: new Date().getFullYear()
        };

        if (option === undefined || option === 'client') {
            this.fs.copyTpl(
                this.templatePath('test.js'),
                this.destinationPath(constants.module.path + data.module.ucfirst() + '/Client/Tests/' + data.name.toLowerCase() + '.test.js'),
                data
            );
        }

        if (option === undefined || option === 'server') {
            this.fs.copyTpl(
                this.templatePath('test.js'),
                this.destinationPath(constants.module.path + data.module.ucfirst() + '/Server/Tests/' + data.name.toLowerCase() + '.test.js'),
                data
            );
        }
    }
});
