// --------------------------------------------------------------------------------------------------------------------

"use strict"

// --------------------------------------------------------------------------------------------------------------------

const valid = {
  format : {
    'iso'   : true,
    'epoch' : true,
  },
}

function logdisFilterTimestamp(opts) {
  opts = opts || {}

  // check we have a field name
  if ( !opts.fieldname ) {
    throw new Error('logdis-filter-timestamp: required: fieldname')
  }

  opts.format = opts.format || 'iso'
  if ( !(opts.format in valid.format) ) {
    throw new Error("logdis-filter-timestamp: option 'format' should be: " + Object.keys(valid.format).join(', '))
  }

  return function(data) {
    var newData = Object.assign({}, data)
    if ( opts.format === 'iso' ) {
      newData[opts.fieldname] = (new Date()).toISOString()
    }
    else {
      newData[opts.fieldname] = Date.now()
    }
    return newData
  }
}

// --------------------------------------------------------------------------------------------------------------------

module.exports = logdisFilterTimestamp

// --------------------------------------------------------------------------------------------------------------------
