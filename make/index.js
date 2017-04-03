'use strict';

var generator = require('yeoman-generator'),
    error = require('./../error'),
    chalk = require('chalk'),
    custom = require('./../custom-prototypes');

module.exports = generator.extend({
    initializing: function () {
        if (this.args.length == 0) {
            this.log(chalk.yellow('\nUsage:\n') + '  yo tmj-module:make [module]\n\n' + chalk.yellow('Error:'));
            this.log(chalk.red('  - name of module is required'));
            process.exit(1);
        }

        this.argument('name', { type: String, required: true });

        if (this.arguments.length > 0) {
            var $this = this;
            this.arguments.forEach(function (module) {
                module = module.ucfirst();
                var data = {
                    arguments: [module.camelCase(), module]
                };

                $this.composeWith('tmj-module:make-angular-config', data);
                $this.composeWith('tmj-module:make-angular-controller', data);
                $this.composeWith('tmj-module:make-angular-factory', data);
                $this.composeWith('tmj-module:make-angular-module', data);
                $this.composeWith('tmj-module:make-angular-provider', data);
                $this.composeWith('tmj-module:make-angular-service', data);
                $this.composeWith('tmj-module:make-controller', data);
                $this.composeWith('tmj-module:make-entity', data);
                $this.composeWith('tmj-module:make-job', data);
                $this.composeWith('tmj-module:make-middleware', data);
                $this.composeWith('tmj-module:make-routes', data);
                $this.composeWith('tmj-module:make-schema', data);
                $this.composeWith('tmj-module:make-test', data);
                $this.composeWith('tmj-module:make-view', {
                    arguments: ['index', module]
                });
            });
        }
    }
});
