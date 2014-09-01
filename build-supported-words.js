var fs = require('fs'),
    words = require('./data/hedges.json');

fs.writeFileSync('Supported-hedge-words.md',
    'Supported hedge-words\n' +
    '=================\n' +
    '\n' +

    words.map(function (word) {
        return '* “' + word + '”';
    }).join(';\n') +

    '.\n'
);
