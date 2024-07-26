const Joi = require("joi")

const Signup = Joi.object({
    username : Joi.string().required(),
    email    : Joi.string().email(),
    password : Joi.string().min(8),
    role     : Joi.string().required(),
})

const Login = Joi.object({
    email       : Joi.string().email().required(),
    password    : Joi.string().min(8).required(),
    location_id : Joi.string()
})

module.exports = {
    Signup,
    Login,
}