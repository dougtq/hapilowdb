let Joi = require('joi')
let handler = require('./handler')

module.exports = [{
  path: '/api/v1/auth',
  method: 'POST',
  handler: handler.auth,
  config:{
    validate: {
      payload: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
      })
    }
  }
}]