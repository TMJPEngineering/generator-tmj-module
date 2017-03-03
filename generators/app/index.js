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
            group: 'make',
            name: 'make',
            description: 'Generate new module in server and client side'
        }, {
            name: 'make-angular-config',
            description: 'Create new config for the specified module in client side'
        }, {
            name: 'make-angular-controller',
            description: 'Create new controller for the specified module in client side'
        }, {
            name: 'make-angular-directive',
            description: 'Create new directive for the specified module in client side'
        }, {
            name: 'make-angular-factory',
            description: 'Create new factory for the specified module in client side'
        }, {
            name: 'make-angular-module',
            description: 'Create a new angular module for the specified module in client side'
        }, {
            name: 'make-angular-provider',
            description: 'Craete new provider for the specified module in client side'
        }, {
            name: 'make-angular-service',
            description: 'Create new service for the specified module in client side'
        }, {
            name: 'make-controller',
            description: 'Create new controller for the specified module in server side'
        }, {
            name: 'make-middleware',
            description: 'Create new middleware for the specified module in server side'
        }, {
            name: 'make-model',
            description: 'Create new model for the specified module in server side'
        }, {
            name: 'make-route',
            description: 'Create new route for the specified module in server side'
        }, {
            name: 'make-schema',
            description: 'Create new schema for the specified module in server side'
        }, {
            name: 'make-test',
            description: 'Create new test for the specified module in server side'
        }, {
            name: 'make-view',
            description: 'Create new html file for the specified module in views folder'
        }];

        this.log(chalk.yellow('Usage:'));
        this.log('  yo tmj-module:[command] [name] [module]\n');
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

            if (command.group !== undefined) {
                console.log(' ' + chalk.yellow(command.group));
            }

            console.log('  ' + chalk.green(command.name) + spaceStr + command.description);
        })
    }
});