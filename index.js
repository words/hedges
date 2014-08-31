'use strict';

var words = require('./data/hedges.json');

function add() {
    words.push.apply(words, arguments);
}

function remove() {
    var iterator = -1,
        length = arguments.length,
        index, word;

    while (++iterator < length) {
        word = arguments[iterator];
        index = words.indexOf(word);

        if (index !== -1) {
            words.splice(index, 1);
        }
    }
}

function is(word) {
    return words.indexOf(word) !== -1;
}

function all() {
    return words.concat();
}

exports.add = add;
exports.remove = remove;
exports.is = is;
exports.all = all;
