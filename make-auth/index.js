'use strict';

var generator = require('yeoman-generator'),
    constants = require('./../constants');

module.exports = generator.extend({
    server: function () {
        this.fs.copy(
            this.templatePath('Auth'),
            this.destinationPath(constants.module.path + 'Auth')
        );

        this.fs.copy(
            this.templatePath('Welcome'),
            this.destinationPath(constants.module.path + 'Welcome')
        );
    },
    client: function () {
        this.fs.copy(
            this.templatePath('views/auth'),
            this.destinationPath(constants.view.path + 'auth')
        );

        this.fs.copy(
            this.templatePath('views/layouts'),
            this.destinationPath(constants.view.path + 'layouts')
        );

        this.fs.copy(
            this.templatePath('views/index.html'),
            this.destinationPath(constants.view.path + 'index.html')
        );

        this.fs.copy(
            this.templatePath('views/welcome.html'),
            this.destinationPath(constants.view.path + 'welcome/index.html')
        );
    }
});
