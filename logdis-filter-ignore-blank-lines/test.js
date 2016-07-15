// --------------------------------------------------------------------------------------------------------------------

"use strict"

// npm
const test = require('tape')

// local
const logdisFilterRemoveBlankLines = require('./')

// --------------------------------------------------------------------------------------------------------------------

test('Test an incoming stream', function(t) {
  t.plan(6)

  let count = 0

  const filter = logdisFilterRemoveBlankLines()
  t.equal(filter('One'), 'One', 'Populated line is okay')
  t.equal(filter('!'), '!', 'Anything is passed along the same')

  t.equal(filter(''), undefined, 'Empty line is ignored')
  t.equal(filter('  '), undefined, 'Blank line is also ignored')
  t.equal(filter('\n'), undefined, 'Even just a newline is ignored')
  t.equal(filter(null), undefined, 'null is ignored')
})

// --------------------------------------------------------------------------------------------------------------------
