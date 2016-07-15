// --------------------------------------------------------------------------------------------------------------------

// core
var events = require('events')

// npm
var split = require('split')

// --------------------------------------------------------------------------------------------------------------------

function logdisInputStdIn() {
  var ee = new events.EventEmitter()

  process.stdin.setEncoding('utf8')

  process.stdin.pipe(split())
    .on('data', (data) => {
      ee.emit('data', data.toString('utf8'))
    })

  process.stdin.on('close', () => {
    // console.log('stdin closed')
  })

  return ee
}

// ---------------------------------------------------------------------------------------------------------------------

module.exports = logdisInputStdIn

// ---------------------------------------------------------------------------------------------------------------------
