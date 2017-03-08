'use strict';

var chalk = require('chalk');

module.exports = function ($this, command) {
    if ($this.args.length != 2) {
        var vars = ['module'],
            message = '';
        vars.unshift(command);
        message = chalk.yellow('\nUsage:\n') + '  yo tmj-module:make-' + command + ' [name] [module] [--option=value]\n\n' + chalk.yellow('Error:');

        if ($this.args.length > 2) {
            message += (chalk.red('\n  Too much arguments'));
        } else {
            for (var counter = $this.args.length; counter < 2; counter++) {
                message += (chalk.red('\n  - name of ' + vars[counter] + ' is required'));
            }
        }

        $this.log(message);
        process.exit(1);
    }
};