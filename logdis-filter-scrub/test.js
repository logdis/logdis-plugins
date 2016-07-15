// --------------------------------------------------------------------------------------------------------------------

// npm
var test = require('tape')

// local
var logdisFilterScrub = require('./')

// --------------------------------------------------------------------------------------------------------------------

test('Check a scrub works ok', function(t) {
  t.plan(2)

  t.throws(function() {
    new logdisFilterScrub()
  }, "creation throws if neither 'scrub' or 'keep' are specified")

  t.throws(function() {
    new logdisFilterScrub({
      scrub : [],
      keep  : [],
    })
  }, "creation throws if both 'scrub' and 'keep' are specified")

  t.end()
})

test('Check a scrub works ok', function(t) {
  t.plan(2)

  var obj = { username : 'chilts', password : '123456' }

  const scrub = new logdisFilterScrub({
    scrub : [ 'password' ],
  })
  t.deepEqual(scrub(obj), { username : 'chilts' }, 'the password was scrubbed')

  const keep = new logdisFilterScrub({
    keep : [ 'username' ],
  })
  t.deepEqual(keep(obj), { username : 'chilts' }, 'the username was kept')
  
  t.end()
})

// --------------------------------------------------------------------------------------------------------------------
