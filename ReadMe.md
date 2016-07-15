# LogDis Plugins #

These are the officially supported plugins for LogDis.

See http://logdis.io/plugins/ for more details.

## Writing a Plugin ##

Please be sure to add the following four keywords to your `package.json` so that others can find it:

* `logdis` - so we can find **everything** related to logdis
* `logdis-plugin` - so we can find **all** plugins
* one of these three depending on your plugin type:
    * `logdis-input` - for input plugins
    * `logdis-filter` - for filter plugins
    * `logdis-output` - for output plugins
* the name of the plugin, such as `logdis-filter-timestamp`

## Finding a Plugin ##

There are three types of plugin:

* Input plugins : https://www.npmjs.com/browse/keyword/logdis-input
* Filter plugins : https://www.npmjs.com/browse/keyword/logdis-filter
* Output plugins : https://www.npmjs.com/browse/keyword/logdis-output

All plugins can be found here : https://www.npmjs.com/browse/keyword/logdis-plugin

(Ends)
