const Joi = require("joi")

const Get = Joi.object({
  _id : Joi.string().required()
})

const Update = Joi.object({
  _id          : Joi.string().required(),
  sideNavColor : Joi.string().valid(...['primary', 'dark', 'info', 'success', 'warning', 'error']),
  sideNavType  : Joi.string().valid(...['dark', 'transparent', 'white']),
  navbarFixed  : Joi.boolean(),
  light        : Joi.boolean(),
  domain       : Joi.string(),
  domainUpdate : Joi.boolean()
})

module.exports = {
  Get,
  Update
}