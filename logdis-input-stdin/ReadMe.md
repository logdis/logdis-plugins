# logdis-input-stdin #

**This is an officially supported http://logdis.io/ plugin.**

Reads `stdin` and passes each line to the filters.

## Synopsis ##

Require `logdis-core` and whatever other filters and outputs you need:

```js
var logdisCore = require('logdis-core')
var inputStdin = require('logdis-input-stdin')

var logdis = logdisCore()
logdis.input(inputStdin())
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
