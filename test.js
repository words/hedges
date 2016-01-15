/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module retext:hedges
 * @fileoverview Test suite for `hedges`.
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var test = require('tape');
var hedges = require('./');

/*
 * Tests.
 */

test('hedges', function (t) {
    t.equal(typeof hedges, 'object', 'should be an array #1');
    t.equal(Array.isArray(hedges), true, 'should be an array #2');
    t.notEqual(hedges.indexOf('appear'), -1, 'should contain words');
    t.end();
});
