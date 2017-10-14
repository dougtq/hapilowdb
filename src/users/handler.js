let db = require('../models/db')

exports.create = (request, reply) => {
  let data = db.create(request.payload)

  reply({ data }).code(200)
}
