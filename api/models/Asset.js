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
        max: 100
    },
    unit: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    }
},
{ timestamps: true }

);

module.exports = model( 'Asset', AssetSchema )