// --------------------------------------------------------------------------------------------------------------------

"use strict"

// core
var fs = require('fs')

// --------------------------------------------------------------------------------------------------------------------

function logdisOutputStdOut(opts) {
  // ToDo: opts.pretty : log with pretty JSON (default: false)
  // ToDo: opts.failed : log any failed messages to this stream, if not provided goes to stderr
  // ToDo: opts.format : 'json' or 'string', so that we can output either

  // check input opts
  opts = opts || {}

  return function(data, callback) {
    let json
    try {
      json = JSON.stringify(data)
      process.stdout.write(json + "\n")
    }
    catch (err) {
      process.stderr.write(err)
    }
  }
}

// --------------------------------------------------------------------------------------------------------------------

module.exports = logdisOutputStdOut

// --------------------------------------------------------------------------------------------------------------------
