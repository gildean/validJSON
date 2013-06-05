validJSON
=========
Returns either a parsed `{Object}` or `{Boolean} false`.

Usage
-----
Install from npm:

`npm install validjson`

Require and use:

```
var validjson = require('validjson');
var str = '{"ok": 2013}';
var obj = validjson(str);
if (obj) {
    console.log(obj);
}
```
