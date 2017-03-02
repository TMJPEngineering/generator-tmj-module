'use strict';

var generator = require('yeoman-generator');

module.exports = generator.extend({
    writing: function () {
        this.log('Controller called');
        this.log(this.arguments);
    }
});
