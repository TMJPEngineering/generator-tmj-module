'use strict';

var generator = require('yeoman-generator');

module.exports = generator.Base.extend({
    _construct: function () {
        generator.Base.apply(this, arguments);
        this.argument('name', { type: String, required: true });
        this.log(this.name);
    },
    initializing: function () {
        this.log('initializing');
    }
});
