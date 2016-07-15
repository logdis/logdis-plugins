// --------------------------------------------------------------------------------------------------------------------

"use strict"

// --------------------------------------------------------------------------------------------------------------------

function logdisFilterScrub(opts) {
  opts = opts || {}

  // check we have only opts.scrub OR opts.keep
  if ( opts.scrub && opts.keep ) {
    throw new Error("ligdis-filter-scrub: Provide only one of 'scrub' or 'keep'")
  }

  // return two different functions depending on what we're doing
  if ( opts.scrub ) {
    return function(data) {
      var newData = Object.assign({}, data)

      for( let i = 0; i < opts.scrub.length; i++ ) {
        delete newData[opts.scrub[i]]
      }

      return newData
    }
  }

  if ( opts.keep ) {
    return function(data) {
      var newData = {}

      var field
      for( let i = 0; i < opts.keep.length; i++ ) {
        field = opts.keep[i]
        newData[field] = data[field]
      }

      return newData
    }
  }

  // unknown whether to 'scrub' or 'keep'
  throw new Error("ligdis-filter-scrub: Provide one of 'scrub' or 'keep'")
}

// --------------------------------------------------------------------------------------------------------------------

module.exports = logdisFilterScrub

// --------------------------------------------------------------------------------------------------------------------
