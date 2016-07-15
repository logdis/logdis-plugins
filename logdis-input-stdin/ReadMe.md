# logdis-input-stdin #

Since this is an officially supported plugin, you may use either:

* `npm install logdis` to get both `logdis-core` and `logdis-input-stdin` (via `logdis-plugins`)

Or:

* `npm install logdis-core` and `npm install logdis-input-stdin`

## Synopsis ##

Using each package independently:

```js
var logdisCore = require('logdis-core')
var inputStdin = require('logdis-input-stdin')

logdisCore().input(inputStdin())
```

(Ends)
