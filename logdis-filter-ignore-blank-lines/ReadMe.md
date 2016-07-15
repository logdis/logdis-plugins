# logdis-filter-ignore-blank-lines #

**This is an officially supported http://logdis.io/ plugin.**

A filter to ignore incoming lines from stdin, file or stream.

This filter expects the incoming data to be strings, and passes those strings through unchanged if the string contains
any data. If the string it empty (or it is undefined) then nothing will be passed through.

## Synopsis ##

Create a command to process stdin and send to stdout, whilst ignoring blank lines:

```js
const logdisCore = require('logdis-core')
const inputStdin = require('logdis-input-stdin')
const filterIgnoreBlankLines = require('logdis-filter-ignore-blank-lines')
const outputStdout = require('logdis-output-stdout')

logdisCore()
    .input(inputStdin())
    .filter(filterIgnoreBlankLines())
    .output(outputStdout())
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
