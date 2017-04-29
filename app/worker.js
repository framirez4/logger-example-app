const debug = require('debug')('worker')
const winston = require('winston')

setInterval(() => {
  winston.log('silly', 'making silly work on winston')
  debug('doing some work')
}, 1000)
