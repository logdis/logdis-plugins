// --------------------------------------------------------------------------------------------------------------------

"use strict"

// --------------------------------------------------------------------------------------------------------------------

function logdisFilterRemoveBlankLines() {
  return function(data) {
    if ( typeof data !== 'string' ) {
      return undefined
    }

    if ( !data.match(/\S/) ) {
      return undefined
    }

    // if data is undefined, this also means logdis-core will ignore it
    return data
  }
}

// --------------------------------------------------------------------------------------------------------------------

module.exports = logdisFilterRemoveBlankLines

// --------------------------------------------------------------------------------------------------------------------
