'use strict';

var generator = require('yeoman-generator');

module.exports = generator.extend({
    initializing: function () {
        this.argument('name', { type: String, required: true });

        var name = this.arguments.shift();

        var data = {
            arguments: [name, name]
        };

        this.composeWith('tmj-module:make-controller', data);
        this.composeWith('tmj-module:make-middleware', data);
        this.composeWith('tmj-module:make-model', data);
        this.composeWith('tmj-module:make-routes', data);
        this.composeWith('tmj-module:make-schema', data);
        this.composeWith('tmj-module:make-test', data);
        this.composeWith('tmj-module:make-view', {
            arguments: ['index', name]
        });

        this.composeWith('tmj-module:make-client-config', data);
        this.composeWith('tmj-module:make-client-controller', data);
        this.composeWith('tmj-module:make-client-directive', data);
        this.composeWith('tmj-module:make-client-factory', data);
        this.composeWith('tmj-module:make-client-module', data);
        this.composeWith('tmj-module:make-client-provider', data);
        this.composeWith('tmj-module:make-client-service', data);
    }
});
