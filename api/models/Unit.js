const { Schema, model } = require('mongoose');

const UnitSchema = Schema({
    name: {
        type: String,
        required: true
    },
    assset: {
        type: Schema.Types.ObjectId,
        ref: 'Asset',
        required: true
    }
},
{ timestamps: true }
);

module.exports = model( 'Unit', UnitSchema )

