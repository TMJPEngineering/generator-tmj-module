'use strict';

/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    <%= module.lcfirst() %>Schema = new Mongoose.Schema({});

module.exports = Mongoose.model('<%= module.ucwords() %>s', <%= module.lcfirst() %>Schema);
