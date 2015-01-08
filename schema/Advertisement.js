/**
 * Created by hawang on 1/7/15.
 */
'use strict';

var exports;
exports = module.exports = function(app, mongoose) {
    var advertisementSchema = new mongoose.Schema({
        company: {
            id: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
            name: { type: String, default: '' }
        },
        name: { type: String, default: ''},
        description: { type: String, default: ''}
    });

    advertisementSchema.index({ company: 1 });
    advertisementSchema.set('autoIndex', (app.get('env') === 'development'));
    app.db.model('Advertisement', advertisementSchema);
};