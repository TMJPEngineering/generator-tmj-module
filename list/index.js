'use strict';

var generator = require('yeoman-generator'),
    constants = require('./../constants'),
    chalk = require('chalk'),
    path = require('path'),
    fs = require('fs');

module.exports = generator.extend({
    initializing: function () {
        var normalizedPath = path.join(this.contextRoot, constants.module.path),
            $this = this,
            lists = [],
            header = {
                name: 'Name',
                path: 'Path'
            },
            count = {
                name: header.name.length,
                path: header.path.length
            };

        this.log(normalizedPath);

        fs.readdirSync(normalizedPath).forEach(function (dir) {
            var module = dir,
                strPath = normalizedPath.replace(/\\/g, '/') + dir;

            lists.push({
                name: module,
                path: strPath
            });

            count = {
                name: (count.name > module.length) ? count.name : module.length,
                path: (count.path > strPath.length) ? count.path : strPath.length
            };
        });

        var border = '+-';
        for (var counter = 0; counter < count.name; counter++) {
            border += '-';
        }
        border += '-+-';
        for (var counter = 0; counter < count.path; counter++) {
            border += '-';
        }
        border += '-+';
        this.log(border);

        var spaceName = count.name - header.name.length,
            spacePath = count.path - header.path.length,
            spacesName = '',
            spacesPath = '';

        for (var counter = 0; counter < spaceName; counter++) {
            spacesName += ' ';
        }

        for (var counter = 0; counter < spacePath; counter++) {
            spacesPath += ' ';
        }

        this.log('| ' + chalk.green(header.name) + spacesName + ' | ' + chalk.green(header.path) + spacesPath + ' |');
        this.log(border);

        lists.forEach(function (list) {
            var spaceName = count.name - list.name.length,
                spacePath = count.path - list.path.length,
                spacesName = '',
                spacesPath = '';

            for (var counter = 0; counter < spaceName; counter++) {
                spacesName += ' ';
            }

            for (var counter = 0; counter < spacePath; counter++) {
                spacesPath += ' ';
            }

            $this.log('| ' + list.name + spacesName + ' | ' + list.path + spacesPath + ' |')
        });

        this.log(border);

    }
});
