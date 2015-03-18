'use strict';

/*
 * Dependencies.
 */

var Interface = require('datalist-interface');

/*
 * Data.
 */

var words = require('./data/hedges.json');

/*
 * Expose hedges.
 */

module.exports = new Interface(words);
