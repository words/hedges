'use strict';

/*
 * Dependencies.
 */

var fs,
    hedges;

fs = require('fs');
hedges = require('..');

/*
 * Write.
 */

fs.writeFileSync('Supported-words.md',
    'Supported words\n' +
    '=================\n' +
    '\n' +

    hedges.all().map(function (word) {
        return '* “' + word + '”';
    }).join(';\n') +

    '.\n'
);
