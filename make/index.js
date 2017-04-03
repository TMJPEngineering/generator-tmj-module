'use strict';

var generator = require('yeoman-generator'),
    error = require('./../error'),
    chalk = require('chalk'),
    custom = require('./../custom-prototypes'),
    hasOption = false;

module.exports = generator.extend({
    initializing: function () {
        var options = ['client', 'server'];
        if (this.args.length == 0) {
            this.log(chalk.yellow('\nUsage:\n') + '  yo tmj-module:make [module]\n\n' + chalk.yellow('Error:'));
            this.log(chalk.red('  - name of module is required'));
            process.exit(1);
        }

        this.argument('name', { type: String, required: true });

        if (this.options.kind !== undefined) {
            if (options.includes(this.options.kind)) {
                hasOption = true;
            } else {
                console.log(chalk.red('Error:\n  - ') + 'Invalid option');
                process.exit(1);
            }
        }

        if (this.arguments.length > 0) {
            var $this = this;
            this.arguments.forEach(function (module) {
                var data = {
                    arguments: [module.camelCase(), module],
                    kind: $this.options.kind
                };

                if (hasOption === false || $this.options.kind === 'client') {
                    $this.composeWith('tmj-module:make-angular-config', data);
                    $this.composeWith('tmj-module:make-angular-controller', data);
                    $this.composeWith('tmj-module:make-angular-factory', data);
                    $this.composeWith('tmj-module:make-angular-module', data);
                    $this.composeWith('tmj-module:make-angular-provider', data);
                    $this.composeWith('tmj-module:make-angular-service', data);
                }

                if (hasOption === false || $this.options.kind === 'server') {
                    $this.composeWith('tmj-module:make-controller', data);
                    $this.composeWith('tmj-module:make-entity', data);
                    $this.composeWith('tmj-module:make-job', data);
                    $this.composeWith('tmj-module:make-middleware', data);
                    $this.composeWith('tmj-module:make-routes', data);
                    $this.composeWith('tmj-module:make-schema', data);
                    $this.composeWith('tmj-module:make-view', {
                        arguments: ['index', module]
                    });
                }

                $this.composeWith('tmj-module:make-test', data);
            });
        }
    }
});
