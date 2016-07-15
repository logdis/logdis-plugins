// --------------------------------------------------------------------------------------------------------------------

"use strict"

// npm
const test = require('tape')

// local
const logdisInputStdin = require('./')

// --------------------------------------------------------------------------------------------------------------------

const lines = [
  'Line one.',
  'Line two.',
  '', // since this file has a newline at the end
]

test('test some input', function(t) {
  t.plan(4)

  let count = 0

  const ee = logdisInputStdin()
  ee.on('data', function(line) {
    t.equal(line, lines[count], 'Input line is correct')
    count++
  })

  setTimeout(function() {
    t.equal(count, 3, 'Number of input lines is correct')
    t.end()
  }, 250)
})

// --------------------------------------------------------------------------------------------------------------------
