// --------------------------------------------------------------------------------------------------------------------

"use strict"

// npm
const test = require('tape')

// local
const logdisFilterTimestamp = require('./')

// --------------------------------------------------------------------------------------------------------------------

test('test some defaults', function(t) {
  t.plan(2)

  t.throws(function() {
    new logdisFilterTimestamp()
  }, "creation throws if 'fieldname' has been left off")

  t.throws(function() {
    new logdisFilterTimestamp({
      fieldname : 'ts',
      format : 'invalid'
    })
  }, "creation throws if 'format' is not 'epoch' or 'iso'")

  t.end()
})

test('test some defaults', function(t) {
  t.plan(2)

  const filter = logdisFilterTimestamp({
    fieldname : 'ts'
  })

  var obj = filter({})
  t.ok('ts' in obj, "the object has a 'ts' field")
  t.equal(typeof obj.ts, 'string', 'the obj.ts has a default of string')

  t.end()
})

test('test different formats', function(t) {
  t.plan(2)

  const filter = logdisFilterTimestamp({
    fieldname : 'ts',
    format : 'epoch',
  })

  var obj = filter({})
  t.ok('ts' in obj, "the object has a 'ts' field")
  t.equal(typeof obj.ts, 'number', 'the obj.ts has a default of number')

  t.end()
})

// --------------------------------------------------------------------------------------------------------------------
