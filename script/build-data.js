/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module hedges:script:build-data
 * @fileoverview Generate a database from source.
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var fs = require('fs');
var path = require('path');
var textToJSON = require('plain-text-data-to-json');

/*
 * Constants.
 */

var INPUT = path.join('data', 'index.txt');
var OUTPUT = path.join('data', 'index.json');

/*
 * Read.
 */

var data = textToJSON(fs.readFileSync(INPUT, 'utf8'));

/*
 * Write.
 */

fs.writeFileSync(OUTPUT, JSON.stringify(data, null, 2) + '\n');
