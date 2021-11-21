const { Schema, model } = require('mongoose');

const CompanySchema = Schema({
    name: {
        type: String,
        required: true,
    },
    // unit: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Unit',
    //     required: false
    // }
},
{ timestamps: true }
)

module.exports = model( 'Company', CompanySchema )