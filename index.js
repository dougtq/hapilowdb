let Hapi = require('hapi')

let server = new Hapi.Server()

server.connection({ port: 4000 })

server.register(
  {
    register: require('hapi-router'),
    options: {
      routes: ['src/**/route.js']
    }
  },
  err => {
    server.start(err => {
      if (err) throw err

      console.log('Server rodando na: ' + server.info.uri)
    })
  }
)
