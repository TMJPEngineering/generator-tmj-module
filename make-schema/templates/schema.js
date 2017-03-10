'use strict';

/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    path = require('path'),
    root = path.dirname(require.main.filename),
    plugin = require(root + '/modules/Shared/Server/Schemas/shared.schema'),
    <%= module.lcfirst() %>Schema = new Mongoose.Schema({});

<%= module.lcfirst() %>Schema.plugin(plugin);

module.exports = Mongoose.model('<%= module.ucfirst() %>s', <%= module.lcfirst() %>Schema);
