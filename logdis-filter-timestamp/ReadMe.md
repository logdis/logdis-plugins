# logdis-filter-timestamp #

**This is an officially supported http://logdis.io/ plugin.**

A filter to add a timestamp field to the processed object. Can be either an ISO timestamp such as
`2016-07-15T11:47:23.301Z` or an epoch (in ms) such as `1468583243301`.

## Synopsis ##

Require `logdis-core` and whatever other inputs and outputs you need:

```js
const logdisCore = require('logdis-core')
const filterTimestamp = require('logdis-filter-timestamp')

const logdis = logdisCore()
// inputs ...
logdis.filter(filterTimestamp({
  fieldname : 'ts',
  format    : 'epoch',
}))
// outputs ...
```

## Options ##

There are two options:

* `fieldname` (string, required) - the fieldname to use for the timestamp
* `format` (string) - only `iso` or `epoch` is allowed (default: `iso`)

## Author ##

Andrew Chilton:

* [Blog    : chilts.org](https://chilts.org/)
* [Twitter : @andychilton](https://twitter.com/andychilton)
* [GitHub  : @chilts](https://github.com/chilts)
* [npm     L @chilts](https://www.npmjs.com/~chilts)

## License ##

ISC.

(Ends)
