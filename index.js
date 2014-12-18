'use strict';

/*
 * Dependencies.
 */

var Interface;

Interface = require('datalist-interface');

/*
 * Data.
 */

var words;

words = require('./data/hedges.json');

/*
 * Expose hedges.
 */

module.exports = new Interface(words);
