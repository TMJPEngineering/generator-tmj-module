'use strict';

var generator = require('yeoman-generator');

module.exports = generator.extend({
    writing: function () {
        this.log('View called');
        this.log(this.arguments);
    }
});
