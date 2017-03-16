'use strict';

/**
 * @author TMJP Engineering Team
 * @copyright 2017
 */

var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    path = require('path'),
    crypto = require('crypto'),
    root = path.dirname(require.main.filename),
    plugin = require(root + '/modules/Shared/Server/Schemas/shared.schema'),

    passwordResetSchema = new Mongoose.Schema({
        email: {
            type: String,
            require: true
        },
        token: {
            type: String,
            require: true,
            set: function (token) {
                return crypto.createHash('sha1').update(token).digest('hex')
            }
        }
    });

passwordResetSchema.plugin(plugin);

module.exports = Mongoose.model('PasswordResets', passwordResetSchema);
