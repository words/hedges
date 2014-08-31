'use strict';

var fs, lines;

fs = require('fs');
lines = fs.readFileSync('data/hedges.txt', 'utf8')
    .split('\n')
    .sort()
    .filter(function (word) {
        if (!word) {
            return false;
        }

        if (word.indexOf('%') === 0) {
            return false;
        }

        return true;
    });

lines.forEach(function (word, index) {
    if (lines.indexOf(word, index + 1) !== -1) {
        throw new Error(
            'Duplicate entry `' + word + '`. ' +
            'Please remove one.'
        );
    }

    if (word.trim() !== word) {
        throw new Error(
            'Padded entry `' + word + '`. ' +
            'Please remove surrounding white space.'
        );
    }

    if (word.toLowerCase() !== word) {
        throw new Error(
            'Mixed-case entry `' + word + '`. ' +
            'Please ensure all entries are lower case.'
        );
    }
});

fs.writeFileSync('data/hedges.json', JSON.stringify(lines));
