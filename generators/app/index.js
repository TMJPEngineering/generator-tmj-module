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

        var options = [{
            name: '-h, --help',
            description: 'Display this help message'
        }];

        var commands = [{
            name: 'app',
            description: 'Lists commands'
        }, {
            name: 'make',
            description: 'Generate new module'
        }, {
            name: 'make-controller',
            description: 'Generate new controller for the specified module'
        }, {
            name: 'make-middleware',
            description: 'Generate new middleware for the specified module'
        }, {
            name: 'make-route',
            description: 'Generate new route for the specified module'
        }, {
            name: 'make-test',
            description: 'Generate new test for the specified module'
        }, {
            name: 'make-view',
            description: 'Generate new view for the specified module'
        }];

        this.log(chalk.yellow('Usage:'));
        this.log('  yo tmj-module:[command] [argument] [option]\n');
        this.log(chalk.yellow('Options:'));

        var spaces = 28,
            spaceStr = '';

        commands.forEach(function (command) {
            if (command.name.length >= spaces) {
                spaces = command.name.length + 2;
            }
        });

        options.forEach(function (option) {
            spaceStr = '';
            for(var counter = 1; counter <= (spaces - option.name.length); counter++) {
                spaceStr += ' ';
            }
            console.log('  ' + chalk.green(option.name) + spaceStr + option.description);
        });

        this.log(chalk.yellow('\nAvailable commands:'));

        commands.forEach(function (command) {
            spaceStr = '';
            for (var counter = 1; counter <= (spaces - command.name.length); counter++) {
                spaceStr += ' ';
            }
            console.log('  ' + chalk.green(command.name) + spaceStr + command.description);
        })
    }
});