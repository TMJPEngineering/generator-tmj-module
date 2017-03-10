'use strict';

var generator = require('yeoman-generator'),
    chalk = require('chalk'),
    error = require('./../error'),
    constants = require('./../constants'),
    option;

module.exports = generator.extend({
    initializing: function () {
        error(this, 'controller', true);
        var options = ['rest', 'plain'];
        option = 'controller';
        this.argument('name', { type: String, required: true });
        this.argument('module', { type: String, required: true });
        if (this.options.option !== undefined) {
            if (options.includes(this.options.option)) {
                option = this.options.option;
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

        this.fs.copyTpl(
            this.templatePath('server/' + option + '.js'),
            this.destinationPath(constants.module.path + data.module + '/Server/Controllers/' + data.name.toLowerCase() + '.controller.js'),
            data
        );
    }
});
