'use strict';

var chalk = require('chalk');

module.exports = function ($this, vars, command) {
    if ($this.args.length < 2) {
        var message = '';
        message = chalk.yellow('\nUsage:\n') + '  yo tmj-module:make-' + command + ' [' + command + '] [module]\n\n' + chalk.yellow('Error:');
        for (var counter = $this.args.length; counter < 2; counter++) {
            message += (chalk.red('\n  - name of ' + vars[counter] + ' is required'));
        }
        $this.log(message);
        process.exit(1);
    }
};