const { Schema, model } = require('mongoose')
const { user } = require('../_enums/enums')

const Pets = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    breed: { type: String, required: true },
    price: { type: String, required: true },
}, { timestamps: true })

module.exports = model('Pets', Pets)