'use strict';

var generator = require('yeoman-generator');

module.exports = generator.extend({
    initializing: function () {
        this.argument('name', { type: String, require: true });

        var name = this.arguments.shift();

        var data = {
            arguments: [name, name]
        };

        this.composeWith('tmj-module:make-controller', data);
        this.composeWith('tmj-module:make-middleware', data);
        this.composeWith('tmj-module:make-route', data);
        this.composeWith('tmj-module:make-test', data);
    }
});
