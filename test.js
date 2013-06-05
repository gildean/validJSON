var validjson = require('./index');
var assert = require('assert');
var validString = '{"ok": 2013}';
var invalidString = '{ok: 2013}';

var validJsonString = validjson(validString);
var invalidJsonString = validjson(invalidString);

if (!assert.ok(validJsonString)) {
    console.log('Test passed (1/2)');
} else {
    console.log('Test failed (1/2)');
}

if (!assert.ifError(invalidJsonString)) {
    console.log('Test passed (2/2)');
} else {
    console.log('Test failed (2/2)')
}
