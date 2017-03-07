'use strict';

var generator = require('yeoman-generator'),
    error = require('./../error'),
    chalk = require('chalk');

module.exports = generator.extend({
    initializing: function () {
        if (this.args.length != 1) {
            this.log(chalk.yellow('\nUsage:\n') + '  yo tmj-module:make [module]\n\n' + chalk.yellow('Error:'));
            if (this.args.length > 1) {
                this.log(chalk.red('  Too much arguments'));
            } else {
                this.log(chalk.red('  - name of module is required'));
            }
            process.exit(1);
        }

        this.argument('name', { type: String, required: true });

        var module = this.arguments.shift();

        var data = {
            arguments: [module, module]
        };

        this.composeWith('tmj-module:make-angular-config', data);
        this.composeWith('tmj-module:make-angular-controller', data);
        this.composeWith('tmj-module:make-angular-factory', data);
        this.composeWith('tmj-module:make-angular-module', data);
        this.composeWith('tmj-module:make-angular-provider', data);
        this.composeWith('tmj-module:make-angular-service', data);
        this.composeWith('tmj-module:make-controller', data);
        this.composeWith('tmj-module:make-middleware', data);
        this.composeWith('tmj-module:make-model', data);
        this.composeWith('tmj-module:make-routes', data);
        this.composeWith('tmj-module:make-schema', data);
        this.composeWith('tmj-module:make-test', data);
        this.composeWith('tmj-module:make-view', {
            arguments: ['index', module]
        });
    }
});
