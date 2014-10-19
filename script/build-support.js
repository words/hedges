'use strict';

var fs = require('fs'),
    words = require('../data/hedges.json');

fs.writeFileSync('Supported-words.md',
    'Supported words\n' +
    '=================\n' +
    '\n' +

    words.map(function (word) {
        return '* “' + word + '”';
    }).join(';\n') +

    '.\n'
);
