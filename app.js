const winston = require('winston')
const express = require('express')
const app = express()

// Simple application for demonstration purposes:
// When DEBUG is set to watch 'my-logger-example', it will show its related logs.
// When 'worker' is added to DEBUG, we will be able to see logs belonging to
// another module that we required.
// When 'express' is added to DEBUG, it has a more complete log that it will start to show.
// DEBUG=my-logger-example,worker,express* node app.js

const debug = require('debug')('my-logger-example')
const name = 'Express logging example'
debug('booting %s', name)

// Logging at application level can be done with Winston.
// Allows to configure different logging levels:
// error - warn - info - verbose - debug - silly

// LOG_LEVEL variable accessible from all the project from process.env
process.env.LOG_LEVEL = 'info'
// process.env.LOG_LEVEL = 'debug'
// process.env.LOG_LEVEL = 'silly'
winston.level = process.env.LOG_LEVEL

winston.log('info', 'Application is running and logging at info level')

// Express app with only one route
app.get('/', function (req, res) {
  debug('Receive call to base directory') // Debug log
  winston.log('debug', 'Now calling the base directory') // Winston log
  res.send('Hello World')
})

app.listen(3000)

// fake worker of some kind
require('./worker')

