'use strict';

var fs = require('fs');
var toJSON = require('plain-text-data-to-json');

var doc = fs.readFileSync('data.txt', 'utf8');

var data = JSON.stringify(toJSON(doc), null, 2) + '\n';

fs.writeFileSync('index.json', data);
