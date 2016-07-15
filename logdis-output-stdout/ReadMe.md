# logdis-output-stdout #

**This is an officially supported http://logdis.io/ plugin.**

An output plugin which prints each log message to `stdout` in JSON format, one log message per line.

## Synopsis ##

Require `logdis-core` and whatever other inputs and filtersyou need:

```js
var logdisCore = require('logdis-core')
var outputStdout = require('logdis-output-stdout')

var logdis = logdisCore()
// inputs ...
// filters ...
logdis.output(outputStdout())
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
