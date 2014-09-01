'use strict';

var words, Interface;

words = require('./data/hedges.json');
Interface = require('datalist-interface');

module.exports = new Interface(words);
