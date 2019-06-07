const { runHookApp } = require('@forrestjs/hooks')

runHookApp([ 
  require('@forrestjs/service-express'),
  require('./home.route'),
  require('@forrestjs/service-express-graphql'),
  require('./welcome.query'),
])
