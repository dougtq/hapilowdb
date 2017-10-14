'use strict'
let crypto = require('crypto')
let low = require('lowdb')
let FileSync = require('lowdb/adapters/FileSync')
let adapter = new FileSync('db.json')
let db = low(adapter)
db
  .defaults({
    users: []
  })
  .write()

exports.create = user => {
  user.password = crypto
    .createHash('md5')
    .update(user.password)
    .digest('hex')

  db
    .get('users')
    .push(user)
    .write()

  let res = db
    .get('users')
    .find(user)
    .value()

  console.log(res)
  return res
}

exports.auth = user => {
  user.password = crypto
  .createHash('md5')
  .update(user.password)
  .digest('hex')

  let res = db
  .get('users')
  .find(user)
  .value()

  return res  
}
