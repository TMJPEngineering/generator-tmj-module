'use strict';

var generator = require('yeoman-generator'),
    error = require('./../error'),
    constants = require('./../constants');

module.exports = generator.extend({
    initializing: function () {
        error(this, ['route', 'module'], 'route');
        this.argument('name', { type: String, required: true });
        this.argument('module', { type: String, required: true });
    },
    executing: function () {
        var data = {
            name: this.args.shift(),
            module: this.args.shift(),
            year: new Date().getFullYear()
        };

        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath(constants.view.path + data.module + '/' + data.name + '.html'),
            data
        );
    }
});

String.prototype.ucwords = function(str) {
    str = this.toLowerCase();
    return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
        function($1){
            return $1.toUpperCase();
        });
}