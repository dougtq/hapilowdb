let db = require('../models/db')
let jwt = require('jsonwebtoken')

exports.auth = (request, reply) => {
  let data = db.auth(request.payload)
  if (data){
    let token = jwt.sign({ user : data.username, name: data.name}, '123456')
    return reply({ sucess : true }).header('Authorization', 'Bearer '+ token)
  }

  reply({ sucess: false}).code(400)
}
