// --------------------------------------------------------------------------------------------------------------------

"use strict"

// npm
const test = require('tape')

// local
const logdisFilterToJson = require('./')

// --------------------------------------------------------------------------------------------------------------------

test('test a few conversions', function(t) {
  t.plan(3)

  const filter = logdisFilterToJson()

  t.deepEqual(filter('{}'), {}, 'An empty object parses and is returned')
  t.deepEqual(filter('{ "a" : "a", "b" : 1 }'), { a : 'a', b : 1 }, 'A populated object parses and is returned')
  t.deepEqual(filter('a'), undefined, "A single letter doesn't parse")

  t.end()
})

// --------------------------------------------------------------------------------------------------------------------
