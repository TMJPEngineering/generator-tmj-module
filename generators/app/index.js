'use strict';

var generator = require('yeoman-generator'),
    chalk = require('chalk'),
    yosay = require('yosay');

module.exports = generator.extend({
    prompting: function () {
        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the exquisite ' + chalk.red('TMJ Mean Stack Module') + ' generator!'
        ));

        var commands = [{
            name: 'make',
            description: 'Generate new module'
        }, {
            name: 'make-controller',
            description: 'Generate a new controller'
        }, {
            name: 'make-middleware',
            description: 'Generate a new middleware'
        }, {
            name: 'make-route',
            description: 'Generate a new route'
        }, {
            name: 'make-test',
            description: 'Generate a new test'
        }];

        this.log(chalk.yellow('Usage:'));
        this.log('  yo tmj-module:[command] [argument] [option]\n');
        this.log(chalk.yellow('Available commands:'));

        var spaces = 28;

        commands.forEach(function (command) {
            if (command.name.length >= spaces) {
                spaces = command.name.length + 2;
            }
        });

        commands.forEach(function (command) {
            var spaceStr = '';
            for (var counter = 1; counter <= (spaces - command.name.length); counter++) {
                spaceStr += ' ';
            }
            console.log('  ' + chalk.green(command.name) + spaceStr + command.description);
        })
    }
});
