/**
 * Created by hawang on 1/7/15.
 */

'use strict';

var exports;
exports = module.exports = function(app, mongoose) {
    var clickSchema = new mongoose.Schema({
        ads: {
            id: { type: mongoose.Schema.Types.ObjectId, ref: 'Advertisement' },
            name: { type: String, default: '' }
        },
        parentUUID: {
            id: {type: mongoose.Schema.Types.ObjectId, ref: 'Student'},
            name: {type: String, default: ''}
        },
        UUID:  {
            id: {type: mongoose.Schema.Types.ObjectId, ref: 'Student'},
            name: {type: String, default: ''}
        }
    });
    clickSchema.plugin(require('./plugins/pagedFind'));
    clickSchema.index({ ads: 1 });
    clickSchema.index({ parentUUID: 1 });
    clickSchema.index({ UUID: 1 });
    clickSchema.set('autoIndex', (app.get('env') === 'development'));
    app.db.model('Click', clickSchema);
};