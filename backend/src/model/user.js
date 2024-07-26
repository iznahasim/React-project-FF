const { Schema, model } = require('mongoose')
const { user } = require('../_enums/enums')

const User = new Schema({
    username: { type: String, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    assign_password: { type: String },
    phone: { type: String },
}, { timestamps: true })

module.exports = model('User', User)