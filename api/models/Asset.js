const { Schema, model } = require('mongoose');

const AssetSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Running', 'Alerting', 'Stopped'],
    },
    healthLevel: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    unit: {
        type: String,
        required: true
    }
},
{ timestamps: true }

);

AssetSchema.method('toJSON', function() {
    const { __v, _id, ...object} = this.toObject();
    object.id = _id;
    return object
})

module.exports = model( 'Asset', AssetSchema )