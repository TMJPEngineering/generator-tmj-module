'use strict';

var generator = require('yeoman-generator');

module.exports = generator.extend({
    writing: function () {
        this.log('Test called');
        this.log(this.arguments);
    }
});
