'use strict';

var generator = require('yeoman-generator'),
    chalk = require('chalk'),
    error = require('./../error'),
    constants = require('./../constants'),
    custom = require('./../custom-prototypes'),
    hasOption = false;

module.exports = generator.extend({
    initializing: function () {
        error(this, 'factory', true);
        var options = ['plain'];
        this.argument('name', { type: String, required: true });
        this.argument('module', { type: String, required: true });
        if (this.options.option !== undefined) {
            if (options.includes(this.options.option)) {
                hasOption = true;
            } else {
                console.log(chalk.red('Error:\n  - ') + 'Invalid option');
                process.exit(1);
            }
        }
    },
    executing: function () {
        var data = {
            name: this.args.shift().ucfirst(),
            module: this.args.shift().ucfirst(),
            year: new Date().getFullYear()
        };

        if (hasOption) {
            this.fs.copyTpl(
                this.templatePath('plain.js'),
                this.destinationPath(constants.module.path + data.module + '/Client/Factories/' + data.name.toLowerCase() + '.factory.js'),
                data
            );
        } else {
            this.fs.copyTpl(
                this.templatePath('manager.js'),
                this.destinationPath(constants.module.path + data.module + '/Client/Factories/' + data.name.toLowerCase() + '-manager.factory.js'),
                data
            );

            this.fs.copyTpl(
                this.templatePath('resource.js'),
                this.destinationPath(constants.module.path + data.module + '/Client/Factories/' + data.name.toLowerCase() + '-resource.factory.js'),
                data
            );
        }
    }
});
