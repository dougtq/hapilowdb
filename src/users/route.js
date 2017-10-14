let Joi = require('joi')
let handler = require('./handler')

module.exports = [{
  path: '/api/v1/users',
  method: 'POST',
  handler: handler.create,
  config:{
    validate: {
      payload: Joi.object({
        name: Joi.string().min(20),
        username: Joi.string().required(),
        password: Joi.string().required()
      })
    }
  }
}]