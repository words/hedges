/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module hedges:script
 * @fileoverview Generate a dictionary of entity names to replacements.
 */

'use strict';

/* Dependencies. */
var fs = require('fs');
var path = require('path');
var toJSON = require('plain-text-data-to-json');

/* Read. */
var doc = fs.readFileSync(path.join(__dirname, '..', 'data.txt'), 'utf8');

/* Transform. */
var data = JSON.stringify(toJSON(doc), null, 2) + '\n';

/* Write. */
fs.writeFileSync(path.join(__dirname, '..', 'index.json'), data);
