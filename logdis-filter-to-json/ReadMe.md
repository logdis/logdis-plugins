# logdis-filter-to-json #

**This is an officially supported http://logdis.io/ plugin.**

A filter to `JSON.parse` incoming `string`s to objects.

## Synopsis ##

Require `logdis-core` and whatever other inputs and outputs you need:

```js
const logdisCore = require('logdis-core')
const filterToJson = require('logdis-filter-to-json')

const logdis = logdisCore()
// inputs ...
logdis.filter(filterToJson())
// filters ...
// outputs ...
```

## Author ##

Andrew Chilton:

* [Blog    : chilts.org](https://chilts.org/)
* [Twitter : @andychilton](https://twitter.com/andychilton)
* [GitHub  : @chilts](https://github.com/chilts)
* [npm     L @chilts](https://www.npmjs.com/~chilts)

## License ##

ISC.

(Ends)
